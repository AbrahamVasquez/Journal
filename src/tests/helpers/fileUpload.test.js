// import { fileUpload } from "../../helpers/fileUpload";
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//     cloud_name: 'deexjgavz',
//     api_key: '378814478435132',
//     api_secret: 'SZIJaJOogGTE9UmV4zPD3ioRda8',
//     secure: true,
//     upload_preset:'react-journal'
// });

// describe('Pruebas en fileUpload', () => { 
    
//     test('should upload file correctly to Cloudinary', async() => { 
        
//         const imageUrl = 'https://www.scotsman.com/webimg/b25lY21zOmU1NjQwNGNjLWUxNDgtNGExMy1iYjFkLTE1MzViM2M3MTRmNDoxOWFjMmI1Yy04ZDQ4LTQ3YzktYjZiMC0wM2ZlY2NmODdjZDY=.jpg?crop=3:2,smart&width=640&quality=65&enable=upscale';
//         const resp = await fetch( imageUrl );
//         const blob = await resp.blob();
//         const file = new File([blob], 'foto.jpg');

//         const url = await fileUpload( file );
//         expect( typeof url).toBe('string');

//         const segmentos = url.split('/');
//         const imageId = segmentos[ segmentos.length - 1 ].replace('.jpg', '');

//         const cloudResp = await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], {
//             resource_type: 'image'
//         });
//         console.log({cloudResp});
    
//     });

//      test('should return null', async() => { 

//         const file = new File([], 'foto.jpg');

//         const url = await fileUpload( file );
//         expect( url).toBe(null);

//       })


//  });