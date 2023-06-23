const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it("Responde con status: 200", async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200); //asi queda mas descriptivo
            // await request.get('/rickandmorty/character/1').expect(200);
        })
        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1');
            const props = ['id', 'name', 'species', 'gender', 'status', 'origin', 'image']
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
            })
        })
        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/8934j');
            expect(response.statusCode).toBe(500)

        })
    })

    describe("GET /rickandmorty/login",() => {
        it("Responde con un objeto con la propiedad access en true si la informacion del usuario es valida", async() => {
            const response = await request.get('/rickandmorty/login?email=dannagonim@gmail.com&password=danna1');//no esta bien esto
            //MANDAR LA INFORMACION POR QUERY ESTA MALLLLL PERO BUENO ESO DICEN LAS CONSIGNAS, SE DEBERIA MANDAR POR POST O PUT, SINO NO ES SEGURO
            expect(response.body).toEqual(access);
            
        })  
        it("Responde con un objeto con la propiedad access en false si la informacion del usuario no es valida", async() => {
            const response = await request.get('/rickandmorty/login?email=dannim@gmail.com&password=danna2345')//no esta bien esto
            access.access = false;
            expect(response.body).toEqual(access);
        })
    })
    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post(/rickandmorty/fav).send()
            //NO TERMINADO
        })
    })
})
