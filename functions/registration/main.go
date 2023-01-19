package main

import (
	"encoding/json"
	"fmt"
	"os"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/google/uuid"
	"github.com/joho/godotenv"
	"github.com/lestrrat-go/jwx/jwa"
	"github.com/lestrrat-go/jwx/jwt"

	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

type Register struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

// xebo protects perosnal information 

func (reg Register) makeJWT() (string, error) {

	now := time.Now()

	bld := jwt.NewBuilder().
		Audience([]string{"https://xebo.me"}).
		IssuedAt(now).
		Expiration(now.Add(time.Hour * 2)).
		Subject(reg.Email).
		JwtID(uuid.NewString())

	bld.Claim("email", reg.Email)
	bld.Claim("name", reg.Name)

	tkn, err := bld.Build()
	if err != nil {
		return "", err
	}

	ser := jwt.NewSerializer()
	byt, err := ser.Sign(jwa.HS256, []byte(os.Getenv("HS256_SECRET"))).Serialize(tkn)
	if err != nil {
		return "", err
	}
	// print statment here
	return string(byt), nil

}

func (reg Register) sendEmail(tkn string) {
	godotenv.Load(".env")

	from := mail.NewEmail("Xebo", "info@credibil.io")
	subject := "New demo link for " + reg.Name
	to := mail.NewEmail(reg.Name, reg.Email)
	msg := mail.NewV3MailInit(from, subject, to)
	tmpltId := os.Getenv("EMAIL_TEMPLATE_ID")
	msg.SetTemplateID(tmpltId)

	msg.Personalizations[0].SetDynamicTemplateData("Name", reg.Name)
	msg.Personalizations[0].SetDynamicTemplateData("Link", "https://demo.credibil.io/financial/xebo?jwt="+tkn)

	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
	response, err := client.Send(msg)
	if err != nil {
		fmt.Println(err)
	}
	statusCode := response.StatusCode

	if statusCode == 200 || statusCode == 201 || statusCode == 202 {
		fmt.Println("Email sent!")

	} else {
		fmt.Println("Email not sent!")
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
		fmt.Println(response.StatusCode)
	}

}

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	var r Register

	if err := json.Unmarshal([]byte(request.Body), &r); err != nil {
		return nil, err
	}

	tkn, err := r.makeJWT()
	if err != nil {
		return nil, err
	}

	r.sendEmail(tkn)

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers:    map[string]string{"Content-Type": "application/json"},
		Body:       "Email sent",
	}, nil
}

func main() {
	lambda.Start(handler)
}
