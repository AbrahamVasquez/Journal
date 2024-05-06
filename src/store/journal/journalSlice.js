import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'journal',
  //declaracion del estado inicial de las variables
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null, 
  },
     //funciones que modifican el estado
  reducers: {
        savingNewNote: (state) =>{
          state.isSaving = true
          
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: ( state, action ) => {
          state.notes =  action.payload;
        },
        setSaving: ( state ) => {
          state.isSaving = true;
          state.messageSaved = '';
        },
        updateNote: ( state, action ) => { // payload: note 
          state.isSaving = false;
          state.notes = state.notes.map( ( note ) => { // map permite regresar un nuevo arreglo basado en el arreglo (notes)
           
            if( note.id === action.payload.id ){
              return action.payload;
            }
            return note;
          })

          // Mostrar mensaje de actualizacion
          state.messageSaved = `${ action.payload.title }, actualizada corrrectamente`;
        },
        setPhotosToActiveNote: (state, action) => {
          state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
          state.isSaving = false;
        },
        setPhotosToActiveNote: (state, action) => {
          if (state.active && state.active.imageUrls) {
            state.active.imageUrls.push(...action.payload);
          }
          state.isSaving = false;
        },
        clearNotesLogout: (state) => {
          state.isSaving = false;
          state.messageSaved = '';
          state.notes = [];
          state.active = null;
      },
        deleteNoteById: ( state, action ) => {
          state.active = null;
          state.notes = state.notes.filter( note => note.id !== action.payload );
        },
    }

});

export const { 
    addNewEmptyNote,
    deleteNoteById,
    clearNotesLogout,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
 } = journalSlice.actions;
