// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleAxiosError(error: any): never {
  if (error.response) {
    console.error('Error en la respuesta del servidor:', error.response.data);
    console.error('Código de estado:', error.response.status);
  } else if (error.request) {
    console.error('No se recibió respuesta del servidor:', error.request);
  } else {
    console.error('Error en la solicitud:', error.message);
  }
  throw error; // Lanza el error para que pueda ser manejado por quien llame a la fn
}
