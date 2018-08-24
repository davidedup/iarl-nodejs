define({ "api": [
  {
    "type": "post",
    "url": "/api/login",
    "title": "Authenticate the user",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of LCCs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of LCCs</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Message of success athentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": \"sucess login!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../routes/login.js",
    "group": "_home_danielrc_Projetos_iarl_backend_routes_login_js",
    "groupTitle": "_home_danielrc_Projetos_iarl_backend_routes_login_js"
  }
] });
