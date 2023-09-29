import { IJsonForm } from "src/app/shared/components/json-form/interfaces/IJsonForm.interface";

export function getMockDataForm(): Promise<IJsonForm> {
  let form: IJsonForm = {
    id: 2,
    name: 'Datos ',
    submitTarget: '/api/forms/submit', // just an example endpoint
    formGroups: [
      {
        id: 5,
        name: 'datos de dirección',
        order: 1,
        styleRules: null,
        formControls: [
          {
            "id": 1,
            "description": null,
            "order": 1,
            "dataSource": "funcName",
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "residencia",
              "tag": "input",
              "label": "residencia",
              "attributes": {
                "type": "radio",
                "required": true,
                "value": "CASA"
              },
              "validators": ["required"],
              "data": [{name: 'CASA', value: true},{name: 'EDIFICIO', value: false}]
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 1,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "departamento",
              "tag": "select",
              "label": "departamento",
              "attributes": {
                "required": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": [{name: "a", value: 1}]
            },
            "dataSource": "funcName"
          },
          {
            "id": 2,
            "description": null,
            "order": 2,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "ciudad_municipio",
              "tag": "select",
              "label": "ciudad/municipio",
              "attributes": {
                "required": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": []
            },
            "dataSource": "funcName"
          },
          {
            "id": 3,
            "description": null,
            "order": 3,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "zona",
              "tag": "select",
              "label": "zona",
              "attributes": {
                "required": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": []
            },
            "dataSource": "funcName"
          },
          {
            "id": 4,
            "description": null,
            "order": 4,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "sector",
              "tag": "select",
              "label": "sector",
              "attributes": {
                "required": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": []
            },
            "dataSource": "funcName"
          }
        ]
      }
    ]
  }

  form = {
    id: 2,
    name: 'Registro de abonado',
    submitTarget: '/api/forms/submit', // just an example endpoint
    formGroups: [
      // FORMGROUP 1 DATOS DEL CONTRATO
      {
        id: 5,
        name: 'DATOS DEL CONTRATO',
        order: 1,
        styleRules: { width: 6 },
        formControls: [
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 1,
            "styleRules": {
              "width": 8
            },
            "control": {
              "name": "tipo_abonado",
              "tag": "input",
              "label": "tipo de abonado",
              "attributes": {
                "type": "radio",
                "required": true,
                "value": "CLIENTE"
              },
              "validators": ["required"],
              "data": [{name: 'CLIENTE', value: 'CLIENTE'}, {name: 'PROSPECTO', value: 'PROSPECTO'}]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 2,
            "styleRules": {
              "width": 4
            },
            "control": {
              "name": "tipo_facturacion",
              "tag": "input",
              "label": "tipo de facturación",
              "attributes": {
                "type": "radio",
                "required": true,
                "value": "PREPAGO"
              },
              "validators": ["required"],
              "data": [{name: 'PREPAGO', value: 'PREPAGO'}, {name: 'POSTPAGO', value: 'POSTPAGO'}]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 3,
            "styleRules": {
              "width": 4
            },
            "control": {
              "name": "franquicia",
              "tag": "select",
              "label": "franquicia",
              "attributes": {
                "placeholder": "seleccione...",
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 4,
            "styleRules": {
              "width": 4
            },
            "control": {
              "name": "grupo_afinidad",
              "tag": "select",
              "label": "grupo afinidad",
              "attributes": {
                "placeholder": "seleccione...",
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 5,
            "styleRules": {
              "width": 4
            },
            "control": {
              "name": "vendedor",
              "tag": "select",
              "label": "vendedor",
              "attributes": {
                "placeholder": "seleccione franquicia",
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 6,
            "styleRules": {
              "width": 4
            },
            "control": {
              "name": "asesor",
              "tag": "input",
              "label": "asesor",
              "attributes": {
                "type": "text",
                "required": true
              },
              "validators": ["required"]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 7,
            "styleRules": {
              "width": 4
            },
            "control": {
              "name": "poste",
              "tag": "input",
              "label": "poste",
              "attributes": {
                "type": "text",
                "required": true
              },
              "validators": ["required"]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 8,
            "styleRules": {
              "width": 12
            },
            "control": {
              "name": "contrato_observacion",
              "tag": "textarea",
              "label": "observación",
              "attributes": {
                "maxLength": 255
              },
              "validators": ["maxLength"]
            }
          }
        ]
      },
      // FORMGROUP 2 DATOS DEL ABONADO
      {
        id: 5,
        name: 'DATOS DEL ABONADO',
        order: 2,
        styleRules: { width: 6 },
        formControls: [
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 1,
            "styleRules": {
              "width": 3
            },
            "control": {
              "name": "fecha_nacimiento",
              "tag": "input",
              "label": "fecha de nacimiento",
              "attributes": {
                "type": "date",
                "required": true
              },
              "validators": ["required"]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 2,
            "styleRules": {
              "width": 3
            },
            "control": {
              "name": "tipo_cliente",
              "tag": "select",
              "label": "tipo cliente",
              "attributes": {
                "placeholder": "seleccione...",
                "value": "NATURAL",
                "required": true
              },
              "validators": ["required"],
              "data": [{name: 'NATURAL', value: 'NATURAL'}]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 3,
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "tipo_doc",
              "tag": "select",
              "label": "tipo doc.",
              "attributes": {
                "placeholder": "seleccione...",
                "value": "V",
                "required": true
              },
              "validators": ["required"],
              "data": [{name: 'V', value: 'V'}]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 4,
            "styleRules": {
              "width": 4
            },
            "control": {
              "name": "n_documento",
              "tag": "input",
              "label": "n° documento",
              "attributes": {
                "type": "text",
                "pattern": "[0-9]*",
                "required": true
              },
              "validators": ["required", "pattern"],
              "buttonGroup": "search"
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 5,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "nombre",
              "tag": "input",
              "label": "nombre(s)",
              "attributes": {
                "type": "text",
                "required": true
              },
              "validators": ["required"]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 6,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "apellido",
              "tag": "input",
              "label": "apellido(s)",
              "attributes": {
                "type": "text",
                "required": true
              },
              "validators": ["required"]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 7,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "celular",
              "tag": "input",
              "label": "celular (móvil)",
              "attributes": {
                "type": "tel",
                "pattern": "[0-9]{3}-[0-9]{7}",
                "required": true
              },
              "validators": ["required", "pattern"]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 8,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "telefono_fijo",
              "tag": "input",
              "label": "télefono fijo",
              "attributes": {
                "type": "tel",
                "pattern": "[0-9]{3}-[0-9]{7}",
                "required": true
              },
              "validators": ["required", "pattern"]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 9,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "telefono_adicional",
              "tag": "input",
              "label": "tlf. adicional",
              "attributes": {
                "type": "tel",
                "pattern": "[0-9]{3}-[0-9]{7}"
              },
              "validators": ["pattern"]
            }
          },
          {
            "id": 1,
            "description": "",
            "dataSource": "",
            "order": 10,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "email",
              "tag": "input",
              "label": "e-mail",
              "attributes": {
                "type": "email",
                "required": true
              },
              "validators": ["required", "email"]
            }
          }
        ]
      },
      // FORMGROUP 3 DATOS DE DIRECCION
      {
        id: 5,
        name: 'DATOS DE DIRECCIÓN',
        order: 3,
        styleRules: { width: 6 },
        formControls: [
          {
            "id": 1,
            "description": null,
            "order": 1,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "departamento",
              "tag": "select",
              "label": "departamento",
              "attributes": {
                "required": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": [{name: "a", value: 1}]
            },
            "dataSource": "funcName"
          },
          {
            "id": 2,
            "description": null,
            "order": 2,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "ciudad_municipio",
              "tag": "select",
              "label": "ciudad/municipio",
              "attributes": {
                "required": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": []
            },
            "dataSource": "funcName"
          },
          {
            "id": 3,
            "description": null,
            "order": 3,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "zona",
              "tag": "select",
              "label": "zona",
              "attributes": {
                "required": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": []
            },
            "dataSource": "funcName"
          },
          {
            "id": 4,
            "description": null,
            "order": 4,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "sector",
              "tag": "select",
              "label": "sector",
              "attributes": {
                "required": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": []
            },
            "dataSource": "funcName"
          },
          {
            "id": 5,
            "description": null,
            "order": 5,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "nomenclatura_1",
              "tag": "select",
              "label": "nomenclatura 1",
              "attributes": {
                "disabled": true,
                "placeholder": "selecione..."
              },
              "validators": ["required"],
              "data": []
            },
            "dataSource": "funcName"
          },
          {
            "id": 6,
            "description": null,
            "order": 6,
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "valor",
              "tag": "select",
              "label": "valor",
              "attributes": {
                "disabled": true
              },
              "validators": ["required"],
              "buttonGroup": "add",
              "data": []
            },
            "dataSource": "funcName"
          }
        ]
      },
      // FORMGROUP 4 DATOS DE RESIDENCIA
      {
        id: 5,
        name: 'DATOS DE RESIDENCIA',
        order: 4,
        styleRules: { width: 6 },
        formControls: [
          {
            "id": 1,
            "description": null,
            "order": 1,
            "dataSource": "funcName",
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "residencia",
              "tag": "input",
              "label": "residencia",
              "attributes": {
                "type": "radio",
                "required": true,
                "value": "CASA"
              },
              "validators": ["required"],
              "data": [{name: 'CASA', value: 'CASA'},{name: 'EDIFICIO', value: 1}]
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 2,
            "dataSource": "funcName",
            "styleRules": {
              "width": 6
            },
            "control": {
              "name": "nro_casa",
              "tag": "input",
              "label": "nro. casa",
              "attributes": {
                "type": "text",
                "pattern": "[0-9]*"
              },
              "validators": ["required", "pattern"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 3,
            "dataSource": "funcName",
            "styleRules": {
              "width": 12
            },
            "control": {
              "name": "punto_referencia",
              "tag": "textarea",
              "label": "punto de referencia",
              "attributes": {
                "placeholder": "dirección adicional o punto de referencia",
                "maxLength": 255
              },
              "validators": ["maxLength"]
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 4,
            "dataSource": "funcName",
            "styleRules": {
              "width": 12, "icon": "fa fa-refresh"
            },
            "control": {
              "name": "direccion_fiscal",
              "tag": "textarea",
              "label": "dirección fiscal",
              "attributes": {
                "placeholder": "dirección fiscal",
                "maxLength": 255,
                "disabled": true
              },
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 5,
            "dataSource": "funcName",
            "styleRules": {
              "width": 12, "icon": "fa fa-globe"
            },
            "control": {
              "name": "georeferenciacion_boton",
              "tag": "button",
              "label": "georeferenciación",
              "content": "MAPA",
              "attributes": {
                "value": "mapa"
              },
              "action": "openMap",
              "fills": "direccion_fiscal"
            }
          }
        ]
      },
      // FORMGROUP 5 SOLICITUD DE INSTALACIÓN
      {
        id: 5,
        name: 'SOLICITUD DE INSTALACIÓN',
        order: 5,
        styleRules: { width: 12 },
        formControls: [
          {
            "id": 1,
            "description": null,
            "order": 1,
            "dataSource": "funcName",
            "styleRules": {
              "width": 12
            },
            "control": {
              "name": "combo_servicios",
              "tag": "input",
              "label": "¿APLICA COMBO DE SERVICIOS?",
              "attributes": {
                "type": "radio",
                "required": true
              },
              "validators": ["required"],
              "data": [{name: 'SI', value: true},{name: 'NO', value: false}]
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 2,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "tipo_servicio",
              "tag": "select",
              "label": "tipo servicio",
              "attributes": {
                "placeholder": "seleccione...",
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 3,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "descripción",
              "tag": "select",
              "label": "tipo servicio",
              "attributes": {
                "placeholder": "seleccione...",
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 4,
            "dataSource": "funcName",
            "styleRules": {
              "width": 1
            },
            "control": {
              "name": "iva",
              "tag": "select",
              "label": "%IVA",
              "attributes": {
                "placeholder": "seleccione...",
                "value": 0,
                "disabled": true,
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 5,
            "dataSource": "funcName",
            "styleRules": {
              "width": 1
            },
            "control": {
              "name": "cantidad",
              "tag": "input",
              "label": "cantidad",
              "attributes": {
                "type": "text",
                "value": 1,
                "pattern": "[0-9]*",
              },
              "validators": ["pattern"]
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 6,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "costo_con_iva",
              "tag": "input",
              "label": "costo con iva",
              "attributes": {
                "type": "text",
                "pattern": "[0-9]*",
                "value": 0,
                "required": true
              },
              "validators": ["required", "pattern"],
              "buttonLabel": {
                "content": "USD"
              }
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 7,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "conversion",
              "tag": "input",
              "label": "",
              "attributes": {
                "type": "text",
                "value": 0,
                "disabled": true,
              },
              "buttonLabel": {
                "content": "BS"
              }
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 8,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "total",
              "tag": "input",
              "label": "total",
              "attributes": {
                "type": "text",
                "value": 0,
                "disabled": true,
              },
              "buttonGroup": "add"
            }
          }
        ]
      },
      // FORM FORMGROUP 6 SUSCRIPCIÓN MENSUAL
      {
        id: 5,
        name: 'SUSCRIPCIÓN MENSUAL',
        order: 6,
        styleRules: { width: 12 },
        formControls: [
          {
            "id": 1,
            "description": null,
            "order": 2,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "tipo_servicio",
              "tag": "select",
              "label": "tipo servicio",
              "attributes": {
                "placeholder": "seleccione...",
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 3,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "descripción",
              "tag": "select",
              "label": "tipo servicio",
              "attributes": {
                "placeholder": "seleccione...",
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 4,
            "dataSource": "funcName",
            "styleRules": {
              "width": 1
            },
            "control": {
              "name": "iva",
              "tag": "select",
              "label": "%IVA",
              "attributes": {
                "placeholder": "seleccione...",
                "value": 0,
                "disabled": true,
                "required": true
              },
              "validators": ["required"],
              "data": []
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 5,
            "dataSource": "funcName",
            "styleRules": {
              "width": 1
            },
            "control": {
              "name": "cantidad",
              "tag": "input",
              "label": "cantidad",
              "attributes": {
                "type": "text",
                "value": 1,
                "pattern": "[0-9]*",
                "disabled": true
              },
              "validators": ["pattern"]
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 6,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "costo_con_iva",
              "tag": "input",
              "label": "costo con iva",
              "attributes": {
                "type": "text",
                "pattern": "[0-9]*",
                "value": 0,
                "required": true
              },
              "validators": ["required", "pattern"],
              "buttonLabel": {
                "content": "USD"
              }
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 7,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "conversion",
              "tag": "input",
              "label": "",
              "attributes": {
                "type": "text",
                "value": 0,
                "disabled": true,
              },
              "buttonLabel": {
                "content": "BS"
              }
            }
          },
          {
            "id": 1,
            "description": null,
            "order": 8,
            "dataSource": "funcName",
            "styleRules": {
              "width": 2
            },
            "control": {
              "name": "total",
              "tag": "input",
              "label": "total",
              "attributes": {
                "type": "text",
                "value": 0,
                "disabled": true,
              },
              "buttonGroup": "add"
            }
          }
        ]
      }
    ]
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(form)
    }, 100);
  });
}