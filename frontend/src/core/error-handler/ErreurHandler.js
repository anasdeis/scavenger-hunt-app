import * as Swal from 'sweetalert2';

export function errorHandler(error) {
  if (error.response) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'An error has occured !',
      text: error.response.data.message
    });
  } else if (error.request) {
    Swal.fire({
      icon: 'error',
      title: 'The request has not been sent.',
      text: error.message
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'An error has occured, please retry.',
      text: error.message
    });
  }
}
