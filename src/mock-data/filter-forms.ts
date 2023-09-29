import { IFilterForm } from "src/app/shared/components/filter-form/interfaces/IFilterForm.interface";

export function getMockFilterForms(): Promise<IFilterForm[]> {
  let control = {
    id: 0,
    description: null,
    order: 1,
    dataSource: null,
    styleRules: {
      "width": 3
    },
    control: {
      "name": "test",
      "tag": "input",
      "attributes": {
        "type": "checkbox"
      }
    }
  };

  let code = {
    id: 0,
    description: null,
    order: 1,
    dataSource: null,
    styleRules: {
      "width": 3
    },
    control: {
      "name": "grupo: grupo fibex",
      "tag": "input",
      "attributes": {
        "type": "checkbox"
      },
      group: [
        control,
        control,
        control,
        control,
        control
      ]
    }
  };

  let filterForms: IFilterForm[] = [
    {
      id: 1,
      name: 'Detalle de facturacion',
      form: null,
      childrenFilterForms: [
        {
          id: 2,
          name: 'Facturacion',
          styleRules: { icon: 'fa fa-file-text-o' },
          form: {
              id: 1,
              name: '...',
              submitTarget: '/api/forms/submit', // just an example endpoint
              formGroups: [
                {
                  id: 1,
                  name: null,
                  order: 1,
                  styleRules: null,
                  formControls: [
                    {
                      id: 1,
                      order: 1,
                      description: null,
                      styleRules: {
                        width: 3
                      },
                      control: {
                        name: 'franquicia',
                        tag: 'select',
                        label: 'franquicia',
                        attributes: {
                          placeholder: 'selecione...'
                        },
                        data: []
                      },
                      dataSource: null
                    },
                    {
                      id: 1,
                      order: 1,
                      description: null,
                      styleRules: {
                        width: 3
                      },
                      control: {
                        name: 'franquicia',
                        tag: 'select',
                        label: 'franquicia',
                        attributes: {
                          placeholder: 'selecione...'
                        },
                        data: []
                      },
                      dataSource: null
                    },
                    {
                      id: 1,
                      order: 1,
                      description: null,
                      styleRules: {
                        width: 3
                      },
                      control: {
                        name: 'franquicia',
                        tag: 'select',
                        label: 'franquicia',
                        attributes: {
                          placeholder: 'selecione...'
                        },
                        data: []
                      },
                      dataSource: null
                    },
                    {
                      id: 1,
                      order: 1,
                      description: null,
                      styleRules: {
                        width: 3
                      },
                      control: {
                        name: 'franquicia',
                        tag: 'select',
                        label: 'franquicia',
                        attributes: {
                          placeholder: 'selecione...'
                        },
                        data: []
                      },
                      dataSource: null
                    },
                    {
                      id: 1,
                      description: null,
                      order: 1,
                      dataSource: "funcName",
                      styleRules: {
                        "width": 3
                      },
                      control: {
                        "name": "activo",
                        "tag": "input",
                        "attributes": {
                          "type": "checkbox"
                        }
                      }
                    },
                    {
                      id: 1,
                      description: null,
                      order: 1,
                      dataSource: null,
                      styleRules: {
                        "width": 3
                      },
                      control: {
                        "name": "actualizado",
                        "tag": "input",
                        "attributes": {
                          "type": "checkbox"
                        }
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  name: null,
                  order: 1,
                  styleRules: null,
                  formControls: [
                    {
                      id: 3,
                      order: 1,
                      description: null,
                      styleRules: {
                        width: 3
                      },
                      control: {
                        name: 'tipo de reporte',
                        tag: 'select',
                        label: 'tipo de reporte',
                        attributes: {
                          value: 'detalle factura'
                        },
                        data: []
                      },
                      dataSource: null
                    },
                    {
                      id: 3,
                      order: 1,
                      description: null,
                      styleRules: {
                        width: 3
                      },
                      control: {
                        name: 'formatos de factura',
                        tag: 'select',
                        label: 'tipo de reporte',
                        attributes: {
                          value: 'formato factura conex_ven'
                        },
                        data: []
                      },
                      dataSource: null
                    }
                  ]
                }
              ]
          },
          childrenFilterForms: []
        },
        {
          id: 3,
          name: 'Estatus',
          styleRules: { icon: 'fa fa-check-square-o' },
          form: {
            id: 1,
            name: '...',
            submitTarget: '/api/forms/submit', // just an example endpoint
            formGroups: [
              {
                id: 1,
                name: null,
                order: 1,
                styleRules: null,
                formControls: [
                  {
                    id: 1,
                    order: 1,
                    description: null,
                    styleRules: {
                      width: 3
                    },
                    control: {
                      name: 'franquicia',
                      tag: 'select',
                      label: 'franquicia',
                      attributes: {
                        placeholder: 'selecione...'
                      },
                      data: []
                    },
                    dataSource: null
                  }
                ]
              },
              {
                id: 2,
                name: null,
                order: 1,
                styleRules: null,
                formControls: [
                  {
                    id: 3,
                    order: 1,
                    description: null,
                    styleRules: {
                      width: 3
                    },
                    control: {
                      name: 'tipo de reporte',
                      tag: 'select',
                      label: 'tipo de reporte',
                      attributes: {
                        value: 'detalle factura'
                      },
                      data: []
                    },
                    dataSource: null
                  },
                  {
                    id: 3,
                    order: 1,
                    description: null,
                    styleRules: {
                      width: 3
                    },
                    control: {
                      name: 'formatos de factura',
                      tag: 'select',
                      label: 'tipo de reporte',
                      attributes: {
                        value: 'formato factura conex_ven'
                      },
                      data: []
                    },
                    dataSource: null
                  }
                ]
              }
            ]
          },
          childrenFilterForms: []
        }
      ]
    },
    {
      id: 3,
      name: 'Resumen de Facturacion',
      form: null,
      childrenFilterForms: []
    }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(filterForms)
    }, 100);
  });
}