Products API URL

post - http://localhost:5000/api/products/add                (Body → form-data )
                                        KEY	TYPE	VALUE
                                        title	Text	Medium Voltage Panel
                                        description	Text	Industrial electrical distribution panel
                                        image	File	(Select Image File)
get - http://localhost:5000/api/products/all
delete - http://localhost:5000/api/products/delete/:id
put - http://localhost:5000/api/products/update/:id        (Body → form-data again)

Hero API URL

post - http://localhost:5000/api/hero/upload  (Body → form-data)
                                            key	type	value
                                            media	File	choose image/video
get - http://localhost:5000/api/hero/get

Services API URL

post - http://localhost:5000/api/services/add     (Body → form-data)
                                                key	type
                                                title	Text
                                                description	Text
                                                image	File
get - http://localhost:5000/api/services/all
delete - http://localhost:5000/api/services/delete/:id
put - http://localhost:5000/api/services/update/:id   (Body → form-data)
                                                key	type
                                                title	Text
                                                description	Text
                                                image	File (optional)