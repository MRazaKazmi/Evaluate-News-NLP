import { handleSubmit } from '../src/client/js/formHandler';

describe('Test handleSubmit function', ()=>{
    test('test that handleSubmit is defined', () => {
        expect(handleSubmit).toBeDefined();
    })
})