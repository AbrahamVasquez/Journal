import { authSlice } from "../../../store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe('Pruebas en el authSlice', () => { 
    
    test('should return initialState and to call "auth"', () => { 
        
        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});

        expect( state ).toEqual(initialState);
     });
 });