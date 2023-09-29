import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.scss']
})
export class HttpErrorComponent implements OnInit {
  // in the router we specify by default that an unmatched route equals "Not Found", so we set the default values here as "page not found"
  public statusCode: number = 404;
  public errorTitle: string = 'La página que busca no se ha encontrado.';
  public errorDescription: string = `La página que busca puede haber sido eliminada, haber cambiado de nombre o no estar disponible.`;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (!params['status_code']) return;

      this.statusCode = +params['status_code'];
      switch (this.statusCode) {
        case 401:
          this.errorTitle = 'No Autorizado.';
          this.errorDescription = `No está autorizado a acceder al recurso solicitado. Esto puede ocurrir por varias razones, tales como:

          - No ha proporcionado ninguna credencial de autenticación.
          - Su sesión ha expirado o ha sido invalidada.
          - No dispone de los permisos o funciones necesarias para acceder al recurso.
          
          Sentimos las molestias causadas por este error. Vuelva a intentarlo más tarde o póngase en contacto con nuestro equipo de asistencia si el problema persiste.`
          break;

        case 403:
          this.errorTitle = 'Prohibido.';
          this.errorDescription = `Esa acción está prohibida.`
          break;

        // no need to put this here but I leave it for consistency
        case 404:
          this.errorTitle = 'La página que busca no se ha encontrado.';
          this.errorDescription = `La página que busca puede haber sido eliminada, haber cambiado de nombre o no estar disponible.`
          break;
      
        case 500:
          this.errorTitle = 'Error interno del servidor';
          this.errorDescription = `Lo sentimos, algo ha ido mal. Se ha producido un error interno del servidor al procesar su solicitud. Se trata de un problema temporal y estamos trabajando para solucionarlo lo antes posible. Vuelva a intentarlo más tarde o póngase en contacto con nuestro equipo de asistencia si el problema persiste. Gracias por su paciencia y comprensión.`
          break;

        case 503:
          this.errorTitle = 'Servicio no Disponible';
          this.errorDescription = `Lo sentimos, pero nuestro sitio web no está disponible en este momento. Esto significa que no estamos preparados para atender su solicitud en este momento. Esto puede deberse a que estamos realizando tareas de mantenimiento o a que estamos experimentando un gran volumen de tráfico. Vuelva a intentarlo más tarde.

          Le pedimos disculpas por las molestias que esto pueda ocasionarle. Si necesita asistencia inmediata, póngase en contacto con nosotros a través de uno de nuestros canales de asistencia. También puede consultar nuestras cuentas en las redes sociales para obtener información actualizada sobre nuestro estado.`
          break;
      }
    })
  }

}
