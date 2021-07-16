

# Documentação API - Agiliza

## Rotas usuário

**Fazer SignIn**

**POST** /users/signin
Enviar tokenAPI em Header

**Body**

    {
    	"email": string,
    	"password": string
    }

**Resposta (200)**

    {
    	"success": boolean,
    	"userToken": string
    }

---
**Fazer SignOut**
Fazer a primeira parte do cadastro

**POST**  /users/signout  
Enviar tokenAPI em Header

**Body**

    {
    	"name": string,
    	"email": string,
    	"cellphone": string,
    	"password": string,
    }

**Resposta (200)**

```
{
	"success": boolean,
	"userToken": string
}
```
 ---
**Enviar informações adicionais para cadastro (Profissional)**
Se caso o usuário for um profissional enviar essas informações.

**POST**  /users/signout_pro  
Enviar tokenAPI em Header

**Body**

    {
	    "userToken": string,
    	"profission": string,
    	"years_experience": string,
    	"enterprise": string
    }

**Resposta (200)**

```
{
	"success": boolean,
	"userToken": string
}
```
 ---
**Enviar informações adicionais para cadastro (Endereço)**
Se caso o usuário for um profissional enviar essas informações.

**POST**  /users/signout_address  
Enviar tokenAPI em Header

**Body**

    {
	    "userToken": string,
    	"street": string,
    	"number": string,
    	"city": string,
    	"neighbor": string,
    	"country": string,
    }

**Resposta (200)**

```
{
	"success": boolean,
	"userToken": string
}
```
 ---
**Pegar informações do usuário**
Pegar informações do usuário

**POST**  /users/profile  
Enviar tokenAPI em Header

**Body**

    {
	    "userToken": string
    }

**Resposta (200)**

```
{
	"name": string,
	"profission": string,
	"url_image": string,
	"email": string,
	"cellphone": string,
	"rating": number,
	"address": {
		"street": string,
		"number": string,
		"neighbor": string,
		"city": string,
		"country": string
	}
	"years_experience": string,
	"enterprise": string,
	"certificates": [
		{
			"name": string,
			"image_url": string,
			"number": string
		},
	],
	"classifications": [
		{
			"id_user": string,		
			"name_user": string,
			"start": number,
			"message": string
		}
	]
}
```

## Rotas services

**Enviando pedido de serviço**
Rota será chamada quando usuário fizer pedido de serviço no App.

**POST**  /services
Enviar tokenAPI em Header

**Body**

    {
	    "userToken": string,
    	"title": string,
    	"message": string,
    	"time": string,
		"created_at": Date,
		"update_at": Date
    }

**Resposta (200)**

```
{
	"success": boolean
}
```
---
**Receber serviços**
Rota será chamada quando usuário quiser ter acesso aos serviços.

**GET**  /services
Enviar tokenAPI em Header

**Resposta (200)**

```

[
	{
	"id": number,
	"user_name": string,
    "title": string,
    "message": string,
    "time": string,
	"created_at": Date,
	"update_at": Date
	},
]
	

```

