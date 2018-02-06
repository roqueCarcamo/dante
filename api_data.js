define({ "api": [
  {
    "type": "delete",
    "url": "/answers/:id",
    "title": "Delete Answer",
    "name": "DeleteAnswer",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Answer unique ID.</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Answer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"_id\": \"5a776c212bde8e12030cca7d\",\n  \"text\": \"Respuesta 1\",\n  \"user\": \"5a77670f2bde8e12030cca7c\",\n  \"createdAt\": \"2018-02-04T20:25:05.246Z\",\n  \"updatedAt\": \"2018-02-04T20:25:05.246Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Answer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/answers/controller.js",
    "groupTitle": "Answer"
  },
  {
    "type": "get",
    "url": "/answers/:id",
    "title": "Get Answer Id",
    "name": "GetAnsweId",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Answer unique ID.</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Answer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"_id\": \"5a776c212bde8e12030cca7d\",\n  \"text\": \"Respuesta 1\",\n  \"user\": \"5a77670f2bde8e12030cca7c\",\n  \"createdAt\": \"2018-02-04T20:25:05.246Z\",\n  \"updatedAt\": \"2018-02-04T20:25:05.246Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Answer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/answers/controller.js",
    "groupTitle": "Answer"
  },
  {
    "type": "get",
    "url": "/answers",
    "title": "List Answers",
    "name": "GetAnswer",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": "<p>skip</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Answers.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"data\": [\n       {\n          \"_id\": \"5a776c212bde8e12030cca7d\",\n          \"text\": \"Respuesta 1\",\n          \"user\": {\n              \"firstname\": \"Rodolfo\",\n              \"lastname\": \"Carcamo\",\n              \"email\": \"rodo@gmail.com\",\n              \"createdAt\": \"2018-02-04T20:03:27.398Z\",\n              \"updatedAt\": \"2018-02-04T20:03:27.398Z\",\n              \"__v\": 0\n          },\n          \"createdAt\": \"2018-02-04T20:25:05.246Z\",\n          \"updatedAt\": \"2018-02-04T20:25:05.246Z\",\n          \"__v\": 0\n      }\n  ],\n  \"limit\": 10,\n  \"skip\": 0,\n   \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Answer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/answers/controller.js",
    "groupTitle": "Answer"
  },
  {
    "type": "post",
    "url": "/answers",
    "title": "Create Answer",
    "name": "PostAnswer",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Answer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"_id\": \"5a776c212bde8e12030cca7d\",\n  \"text\": \"Respuesta 1\",\n  \"user\": \"5a77670f2bde8e12030cca7c\",\n  \"createdAt\": \"2018-02-04T20:25:05.246Z\",\n  \"updatedAt\": \"2018-02-04T20:25:05.246Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Answer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/answers/controller.js",
    "groupTitle": "Answer"
  },
  {
    "type": "put",
    "url": "/answers/:id",
    "title": "Update Answer",
    "name": "PutAnswer",
    "group": "Answer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Answer unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User unique ID.</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Answer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"_id\": \"5a776c212bde8e12030cca7d\",\n  \"text\": \"Respuesta 1\",\n  \"user\": \"5a77670f2bde8e12030cca7c\",\n  \"createdAt\": \"2018-02-04T20:25:05.246Z\",\n  \"updatedAt\": \"2018-02-04T20:25:05.246Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Answer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/answers/controller.js",
    "groupTitle": "Answer"
  },
  {
    "type": "post",
    "url": "/questions/:id/delete",
    "title": "Delete Question",
    "name": "DeleteQuestion",
    "group": "Question",
    "description": "<p>Solo el autor de la pregunta podrá borrarla.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Question unique ID.</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n   \"answer\": [\n       \"5a7621f97e305704a003f908\",\n       \"5a76210a7e82cb032baa4483\"\n   ],\n    \"_id\": \"5a7620747e82cb032baa4482\",\n    \"text\": \"Nueva pregunta\",\n   \"user\": \"5a76115e18d46c1518302bb1\",\n    \"createdAt\": \"2018-02-03T20:49:56.343Z\",\n    \"updatedAt\": \"2018-02-03T21:02:31.131Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Question was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/questions/controller.js",
    "groupTitle": "Question"
  },
  {
    "type": "put",
    "url": "/questions/:id",
    "title": "Get Question id",
    "name": "GetQuestion",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Question unique ID.</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n   \"answer\": [\n       \"5a7621f97e305704a003f908\",\n       \"5a76210a7e82cb032baa4483\"\n   ],\n    \"_id\": \"5a7620747e82cb032baa4482\",\n    \"text\": \"Nueva pregunta\",\n    \"user\": \"5a76115e18d46c1518302bb1\",\n    \"createdAt\": \"2018-02-03T20:49:56.343Z\",\n    \"updatedAt\": \"2018-02-03T21:02:31.131Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Question was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/questions/controller.js",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/questions",
    "title": "List Questions",
    "name": "GetQuestion",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": "<p>Skip</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"answer\": [\n          {\n              \"_id\": \"5a7621f97e305704a003f908\",\n               \"text\": \"Respuesta 2\",\n             \"user\": \"5a76115e18d46c1518302bb1\",\n              \"createdAt\": \"2018-02-03T20:56:25.059Z\",\n              \"updatedAt\": \"2018-02-03T20:56:25.059Z\",\n              \"__v\": 0\n         },\n         {\n              \"_id\": \"5a76210a7e82cb032baa4483\",\n              \"text\": \"Hola respuesta\",\n              \"user\": \"5a76115e18d46c1518302bb1\",\n              \"createdAt\": \"2018-02-03T20:52:26.249Z\",\n              \"updatedAt\": \"2018-02-03T20:52:26.249Z\",\n              \"__v\": 0\n          }\n      ],\n      \"_id\": \"5a7620747e82cb032baa4482\",\n      \"text\": \"Nueva pregunta\",\n      \"user\": {\n          \"firstname\": \"Rodolfo \",\n          \"lastname\": \"Cárcamo\",\n          \"email\": \"carcamomesa+2@gmail.com\",\n          \"createdAt\": \"2018-02-03T19:45:34.102Z\",\n          \"updatedAt\": \"2018-02-03T19:45:34.102Z\",\n          \"__v\": 0\n      },\n      \"createdAt\": \"2018-02-03T20:49:56.343Z\",\n      \"updatedAt\": \"2018-02-03T21:02:31.131Z\",\n      \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/questions/controller.js",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/questions",
    "title": "Create Question",
    "name": "PostQuestion",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "answer",
            "description": "<p>Array of the answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>unique ID of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"answer\": [],\n  \"_id\": \"5a762b939408cd11ad3cd03a\",\n  \"text\": \"Nueva pregunta\",\n  \"user\": \"5a76115e18d46c1518302bb1\",\n   \"createdAt\": \"2018-02-03T21:37:23.702Z\",\n   \"updatedAt\": \"2018-02-03T21:37:23.702Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Question was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/questions/controller.js",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/questions/:id/answer",
    "title": "Update Answer Question",
    "name": "PostQuestionAnswer",
    "group": "Question",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Question unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Answer unique ID.</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n   \"answer\": [\n       \"5a7621f97e305704a003f908\",\n       \"5a76210a7e82cb032baa4483\"\n   ],\n    \"_id\": \"5a7620747e82cb032baa4482\",\n    \"text\": \"Nueva pregunta\",\n   \"user\": \"5a76115e18d46c1518302bb1\",\n    \"createdAt\": \"2018-02-03T20:49:56.343Z\",\n    \"updatedAt\": \"2018-02-03T21:02:31.131Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Question was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/questions/controller.js",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/questions/:id",
    "title": "Update Question",
    "name": "PutQuestion",
    "group": "Question",
    "description": "<p>Solo el autor de la pregunta podrá editarla.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Question unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
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
            "field": "_id",
            "description": "<p>unique ID of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n   \"answer\": [\n       \"5a7621f97e305704a003f908\",\n       \"5a76210a7e82cb032baa4483\"\n   ],\n    \"_id\": \"5a7620747e82cb032baa4482\",\n    \"text\": \"Nueva pregunta\",\n   \"user\": \"5a76115e18d46c1518302bb1\",\n    \"createdAt\": \"2018-02-03T20:49:56.343Z\",\n    \"updatedAt\": \"2018-02-03T21:02:31.131Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Question was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/questions/controller.js",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List Users",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": "<p>Skip</p>"
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
            "field": "firstname",
            "description": "<p>Firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"data\": [\n       {\n           \"firstname\": \"Rodolfo\",\n           \"lastname\": \"Carcamo\",\n           \"email\": \"rodo@gmail.com\",\n           \"createdAt\": \"2018-02-04T20:03:27.398Z\",\n           \"updatedAt\": \"2018-02-04T20:03:27.398Z\",\n           \"__v\": 0\n       }\n  ],\n   \"limit\": 10,\n   \"skip\": 0,\n   \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/users/controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login",
    "name": "PostLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
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
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Answers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Answers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"user\": {\n       \"firstname\": \"Rodolfo\",\n       \"lastname\": \"Carcamo\",\n       \"email\": \"rodo@gmail.com\",\n       \"createdAt\": \"2018-02-04T20:03:27.398Z\",\n       \"updatedAt\": \"2018-02-04T20:03:27.398Z\",\n       \"__v\": 0\n   },\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTc3NjcwZjJiZGU4ZTEyMDMwY2NhN2MiLCJpYXQiOjE1MTc3NzU0NjMsImV4cCI6MTUxNzc3OTA2M30.JdNH2g8DzOkW1dvG9E5xfaobAbQ9GeVDERDV0bYISbw\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/users/controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Signup",
    "name": "SignupUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
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
            "field": "firstname",
            "description": "<p>Firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Answers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Answers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"firstname\": \"Camila\",\n        \"lastname\": \"Hernandez\",\n        \"email\": \"camila@gmail.com\",\n        \"createdAt\": \"2018-02-04T21:08:35.724Z\",\n        \"updatedAt\": \"2018-02-04T21:08:35.724Z\",\n        \"__v\": 0\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTc3NzY1MzlhOWIyODE5ZmIxMDc0OTgiLCJpYXQiOjE1MTc3Nzg1MTYsImV4cCI6MTUxNzc4MjExNn0.w2eJg8kGR_w1SE3oqSINkmbr2s0q2s-bIbN2H5fMxWE\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/users/controller.js",
    "groupTitle": "User"
  }
] });
