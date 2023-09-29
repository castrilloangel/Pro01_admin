import { IUser } from "src/app/core/interfaces/IUser.interface";
import { IDummyDataResponse } from "src/shared-interfaces/IDummyDataResponse.interface";

export function getMockUserPublicInfo(): Promise<IDummyDataResponse<IUser>> {
  let data: IUser = {
    id: 1,
    username: "user",
    email: "user@gmail.com",
    roles: [],
    modules: [
        {
          id: 2,
          name: 'Home',
          order: 1,
          route: 'home',
          styleRules: { icon: 'fa fa-home' },
          childrenModules: []
        },
      {
        id: 3,
        name: 'Abrir Caja',
        order: 2,
        route: 'caja',
        styleRules: { icon: 'fa fa-folder-open' },
        childrenModules: []
      },
      {
        id: 4,
        name: 'Abonados',
        order: 3,
        styleRules: { icon: 'fa fa-users' },
        childrenModules: [
          {
            id: 5,
            name: 'Registrar Abonado',
            order: 1,
            route: 'abonado/autorizar',
            contentRoute: '/modules/3/content-blocks',
            childrenModules: [],
          },
          {
            id: 6,
            name: 'Consultar Abonado',
            order: 2,
            styleRules: { icon: 'fa fa-search' },
            route: 'abonado/consulta',
            childrenModules: []
          },
          {
            id: 7,
            name: 'Autorizar Actualización',
            order: 3,
            route: 'abonado/autorizar',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 8,
            name: 'Crear Cuenta O.V',
            order: 4,
            route: 'abonado/cuenta-ov',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 9,
        name: 'Registrar Pago',
        order: 4,
        route: 'pago',
        styleRules: { icon: 'fa fa-pencil-square-o' },
        childrenModules: []
      },
      {
        id: 10,
        name: 'Cobranza',
        order: 5,
        styleRules: { icon: 'fa fa-money' },
        childrenModules: [
          {
            id: 11,
            name: 'Abrir Caja',
            order: 1,
            route: 'cobranza/caja',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 12,
            name: 'Cobrar/Facturar',
            order: 2,
            route: 'cobranza/cobrar_facturar',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 13,
            name: 'Reportar Pago',
            order: 3,
            route: 'cobranza/reporte_pago',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 14,
            name: 'Cargar Deuda',
            order: 4,
            route: 'cobranza/cargar_deuda',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 15,
            name: 'Egreso Caja',
            order: 5,
            route: 'cobranza/egreso_caja',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 16,
            name: 'Cierres',
            order: 6,
            route: 'cobranza/cierres',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: [
              {
                id: 17,
                name: 'Cerrar Caja',
                order: 1,
                route: 'cobranza/cierres/cerrar_caja',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 18,
                name: 'Cerrar Oficina de Cobro',
                order: 2,
                route: 'cobranza/cierres/cerrar_oficina_cobro',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 19,
                name: 'Cierre Diario',
                order: 3,
                route: 'cobranza/cierres/cierre_diario',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              }
            ]
          },
          {
            id: 20,
            name: 'Otras Acciones',
            order: 7,
            route: 'cobranza/otras_acciones',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: [
              {
                id: 21,
                name: 'Anular Pagos',
                order: 1,
                route: 'cobranza/otras_acciones/anular_pagos',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 22,
                name: 'Anular Facturas',
                order: 2,
                route: 'cobranza/otras_acciones/anular_facturas',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 23,
                name: 'Consultar Pagos',
                order: 3,
                route: 'cobranza/otras_acciones/consultar_pagos',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 24,
                name: 'Modificar Forma de Pagos',
                order: 4,
                route: 'cobranza/otras_acciones/modificar_pago',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              }
            ]
          }
          
        ]
      },
      {
        id: 25,
        name: 'Convenios de Pagos',
        order: 6,
        styleRules: { icon: 'fa fa-handshake-o' },
        childrenModules: [
          {
            id: 26,
            name: 'Consultar',
            order: 1,
            route: 'convenios/consultar',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 27,
            name: 'Solicitar',
            order: 2,
            route: 'convenios/solicitar',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 28,
            name: 'Autorizar',
            order: 3,
            route: 'convenios/autorizar',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
        ]
      },
      {
        id: 26,
        name: 'Ordenes Técnicas',
        order: 7,
        styleRules: { icon: 'fa fa-file' },
        childrenModules: [
          {
            id: 27,
            name: 'Crear Orden',
            order: 1,
            route: 'ordenes_tecnicas/crear_orden',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 28,
            name: 'Consultar Orden',
            order: 2,
            route: 'ordenes_tecnicas/solicitar',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 29,
        name: 'Cortes',
        order: 7,
        styleRules: { icon: 'fa fa-hand-paper-o' },
        childrenModules: [
          {
            id: 30,
            name: 'Consultar cortes',
            order: 1,
            route: 'cortes/consultar',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 31,
        name: 'Técnicos',
        order: 7,
        styleRules: { icon: 'fa fa-wrench' },
        childrenModules: [
          {
            id: 32,
            name: 'Resumen',
            order: 1,
            route: 'tecnicos/resumen',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 33,
            name: 'Gestión Orden',
            order: 2,
            route: 'tecnicos/gestion_orden',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 34,
        name: 'Administración',
        order: 8,
        styleRules: { icon: 'fa fa-briefcase' },
        childrenModules: [
          {
            id: 35,
            name: 'Estado Cuenta Oficina',
            order: 1,
            route: 'administracion/estado_cuenta_oficina',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 36,
            name: 'Facturación Empresa',
            order: 2,
            route: 'administracion/facturacion_empresa',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 37,
            name: 'Comprobantes',
            order: 3,
            route: 'administracion/comprobantes',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: [
              {
                id: 38,
                name: 'Solicitar Nota',
                order: 1,
                route: 'administracion/comprobantes/solicitar_nota',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 39,
                name: 'Autorizar Nota',
                order: 1,
                route: 'administracion/comprobantes/autorizar_nota',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              }
            ]
          },
          {
            id: 40,
            name: 'Conciliación Bancaria',
            order: 4,
            route: 'administracion/conciliacion_bancaria',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: [
              {
                id: 41,
                name: 'Cargar Archivos Bancos',
                order: 1,
                route: 'administracion/conciliacion_bancaria/cargar_archivos_bancos',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 42,
                name: 'Conciliación',
                order: 2,
                route: 'administracion/conciliacion_bancaria/conciliacion',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 43,
                name: 'Bancos Cargados',
                order: 3,
                route: 'administracion/conciliacion_bancaria/bancos_cargados',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              }
            ]
          },
          {
            id: 44,
            name: 'Reportar Pago',
            order: 5,
            route: 'administracion/reportar_pago',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 45,
            name: 'Excluir Pago',
            order: 6,
            route: 'administracion/excluir_pago',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 46,
        name: 'Materiales',
        order: 9,
        styleRules: { icon: 'fa fa-truck' },
        childrenModules: [
          {
            id: 47,
            name: 'Consultar Almacén',
            order: 1,
            route: 'materiales/consultar_almacen',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 48,
            name: 'Inventario de Materiales',
            order: 2,
            route: 'materiales/inventario_materiales',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 49,
            name: 'Movimiento de Materiales',
            order: 3,
            route: 'materiales/movimiento_materiales',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 50,
            name: 'Reporte',
            order: 3,
            route: 'materiales/movimiento_materiales',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 51,
        name: 'Promociones',
        order: 10,
        styleRules: { icon: 'fa fa-star' },
        childrenModules: [
          {
            id: 52,
            name: 'Asignar Promociones',
            order: 1,
            route: 'promociones/asignar_promociones',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 53,
            name: 'Finalizar Promocion',
            order: 2,
            route: 'promociones/finalizar_promocion',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 54,
        name: 'Servicio al Cliente',
        order: 11,
        route: 'servicio_cliente',
        styleRules: { icon: 'fa fa-thumbs-up' },
        childrenModules: [
          {
            id: 55,
            name: 'Registro Saliente',
            order: 1,
            route: 'servicio_cliente/registro_saliente',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: [
              {
                id: 56,
                name: 'Registrar',
                order: 1,
                route: 'servicio_cliente/registrar',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 57,
                name: 'Asignar Llamadas',
                order: 2,
                route: 'servicio_cliente/asignar_llamadas',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 58,
                name: 'Realizar Llamadas Asignadas',
                order: 3,
                route: 'servicio_cliente/realizar_llamadas_asignadas',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
              {
                id: 59,
                name: 'Listado de Llamadas',
                order: 4,
                route: 'servicio_cliente/listado_llamadas',
                contentRoute: '/modules/5/content-blocks',
                childrenModules: []
              },
            ]
          },
          {
            id: 60,
            name: 'Registro Entrante',
            order: 2,
            route: 'servicio_cliente/registro_entrante',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 61,
        name: 'Terminales',
        order: 12,
        styleRules: { icon: 'fa fa-hdd-o' },
        childrenModules: [
          {
            id: 62,
            name: 'Caja Fat',
            order: 1,
            route: 'terminales/caja_fat',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 63,
            name: 'SIP y RED',
            order: 2,
            route: 'terminales/sip_red',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 64,
            name: 'Equipo Sistema',
            order: 3,
            route: 'terminales/equipo_sistema',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 65,
            name: 'Comunicador de API',
            order: 4,
            route: 'terminales/comunicador_api',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 66,
            name: 'Ingresar Equipos a Sistema',
            order: 5,
            route: 'terminales/ingresar_equipo_sistema',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 67,
            name: 'Consulta Almacén',
            order: 6,
            route: 'terminales/consulta_almacen',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 68,
            name: 'Movimientos de Equipos',
            order: 7,
            route: 'terminales/movimientos_equipos',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          },
          {
            id: 69,
            name: 'Importar Equipos de SmartOLT',
            order: 8,
            route: 'terminales/importar_equipos_smartolt',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: []
          }
        ]
      },
      {
        id: 70,
        name: 'Configuración',
        order: 13,
        styleRules: { icon: 'fa fa-cog' },
        childrenModules: [
          {
            id: 71,
            name: 'Parámetros Generales',
            order: 1,
            route: 'configuracion/parametros_generales',
            contentRoute: '/modules/5/content-blocks',
            childrenModules: [
            {
              id: 72,
              name: 'Empresas',
              order: 2,
              route: 'configuracion/parametros_generales/empresas',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 73,
              name: 'Grupo Franquicias',
              order: 2,
              route: 'configuracion/parametros_generales/grupo_franquicias',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 74,
              name: 'Franquicias',
              order: 3,
              route: 'configuracion/parametros_generales/franquicias',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 75,
              name: 'Oficina de Cobro',
              order: 4,
              route: 'configuracion/parametros_generales/oficina_cobro',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 76,
              name: 'Estaciones de Trabajo',
              order: 5,
              route: 'configuracion/parametros_generales/estaciones_trabajo',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 77,
              name: 'Cajas',
              order: 6,
              route: 'configuracion/parametros_generales/cajas',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 78,
              name: 'Punto de Venta Bancarios',
              order: 7,
              route: 'configuracion/parametros_generales/punto_venta_bancarias',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 79,
              name: 'Bancos',
              order: 8,
              route: 'configuracion/parametros_generales/bancos',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 80,
              name: 'Formas de Pago',
              order: 9,
              route: 'configuracion/parametros_generales/formas_pago',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 81,
              name: 'Grupos de Afinidad',
              order: 10,
              route: 'configuracion/parametros_generales/grupos_afinidad',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 82,
              name: 'Motivos de Observación',
              order: 11,
              route: 'configuracion/parametros_generales/motivos_observacion',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 83,
              name: 'Motivos de Notas Déb/Créd',
              order: 12,
              route: 'configuracion/parametros_generales/motivo_notas_cred_deb',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 84,
              name: 'Tipo Egreso',
              order: 13,
              route: 'configuracion/parametros_generales/tipo_egreso',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 85,
              name: 'Multimonedas',
              order: 14,
              route: 'configuracion/parametros_generales/multimonedas',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            },
            {
              id: 86,
              name: 'Cambio de Monedas',
              order: 15,
              route: 'configuracion/parametros_generales/cambio_monedas',
              contentRoute: '/modules/5/content-blocks',
              childrenModules: []
            }
            ]
          },
          {
            id: 87,
            name: 'Datos de Ubicación',
            order: 14,
            route: 'configuracion/datos_ubicacion',
            childrenModules: [
                {
                  id: 88,
                  name: 'Paises',
                  order: 1,
                  route: 'configuracion/datos_ubicacion/paises',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 89,
                  name: 'Departamentos',
                  order: 2,
                  route: 'configuracion/datos_ubicacion/departamentos',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 90,
                  name: 'Municipios/Ciudad',
                  order: 3,
                  route: 'configuracion/datos_ubicacion/municipios_ciudad',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 91,
                  name: 'Ciudades',
                  order: 4,
                  route: 'configuracion/datos_ubicacion/Ciudades',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 92,
                  name: 'Parroquia',
                  order: 5,
                  route: 'configuracion/datos_ubicacion/Parroquia',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 93,
                  name: 'Sectores',
                  order: 6,
                  route: 'configuracion/datos_ubicacion/Sectores',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 94,
                  name: 'Ubicacion',
                  order: 7,
                  route: 'configuracion/datos_ubicacion/ubicacion',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 95,
                  name: 'Urbanizaciones',
                  order: 8,
                  route: 'configuracion/datos_ubicacion/urbanizaciones',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 96,
                  name: 'Edificios',
                  order: 9,
                  route: 'configuracion/datos_ubicacion/edificios',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 97,
                  name: 'Nomenclatura',
                  order: 10,
                  route: 'configuracion/datos_ubicacion/nomenclatura',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 98,
                  name: 'Zonas',
                  order: 11,
                  route: 'configuracion/datos_ubicacion/zonas',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                },
                {
                  id: 99,
                  name: 'Manzana',
                  order: 12,
                  route: 'configuracion/datos_ubicacion/manzana',
                  contentRoute: '/modules/5/content-blocks',
                  childrenModules: []
                }
              ]
          },
          {
            id: 100,
            name: 'Administrar Empleados',
            order: 15,
            route: 'configuracion/administrar_empleados',
            childrenModules:[]
          },
          {
            id: 101,
            name: 'Datos de Servicios',
            order: 16,
            route: 'configuracion/datos_servicios',
            childrenModules:[
              {
                id: 102,
                name: 'Tipos de Servicios',
                order: 1,
                route: 'configuracion/datos_servicios/tipos_servicios',
                childrenModules:[]
              },
              {
                id: 103,
                name: 'Servicios',
                order: 2,
                route: 'configuracion/datos_servicios/servicios',
                childrenModules:[]
              },
              {
                id: 104,
                name: 'Tarifa de Servicios',
                order: 3,
                route: 'configuracion/datos_servicios/tarifa_servicios',
                childrenModules:[]
              },
              {
                id: 105,
                name: 'Crear Promoción',
                order: 4,
                route: 'configuracion/datos_servicios/crear_promocion',
                childrenModules:[]
              },
              {
                id: 106,
                name: 'Paquetes',
                order: 5,
                route: 'configuracion/datos_servicios/paquetes',
                childrenModules:[]
              },
              {
                id: 107,
                name: 'Cantidad de TV',
                order: 6,
                route: 'configuracion/datos_servicios/cantidad_tv',
                childrenModules:[]
              },
              {
                id: 108,
                name: 'Cantidad de TV',
                order: 7,
                route: 'configuracion/datos_servicios/cantidad_megas',
                childrenModules:[]
              }
            ]
          },
          {
            id: 109,
            name: 'Datos de Órdenes Técnicas',
            order: 17,
            route: 'configuracion/datos_ordenes_tecnicas',
            childrenModules:[
              {
                id: 110,
                name: 'Tipos de Órdenes',
                order: 1,
                route: 'configuracion/datos_ordenes_tecnicas/tipo_ordenes',
                childrenModules:[]
              },
              {
                id: 111,
                name: 'Detalles de Órdenes',
                order: 2,
                route: 'configuracion/datos_ordenes_tecnicas/detalles_ordenes',
                childrenModules:[]
              },
              {
                id: 112,
                name: 'Solución Aplicada',
                order: 3,
                route: 'configuracion/datos_ordenes_tecnicas/solucion_aplicada',
                childrenModules:[]
              }
            ]
          },
          // {
          //   id: 114,
          //   name: 'Servicio Al Cliente',
          //   order: 18,
          //   route: 'configuracion/datos_ordenes_tecnicas',
          //   styleRules: { icon: 'fa fa-cog' },
          //   childrenModules:[]
          // },
          
        ]
      },
      

      

    ]
  }
  
  const res = { data }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, 100);
  });
}