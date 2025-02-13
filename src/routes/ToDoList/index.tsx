import { component$, useSignal, useStore, useStylesScoped$} from "@builder.io/qwik";
import styles from "./index.css?inline";

type Item = {
    id : number;
    content : string;
};

export default component$(() => {
    useStylesScoped$(styles);

    const nouvelleTache = useStore([
        {titre: '', objetcifs: ''},
    ])

    return (
        <>
        <div id="titre">Bienvenue sur la To Do List</div>
        <div id="inputs">
            <div id="input_gauche">
                <div id="input_titre">
                    <label>Quel est le nom de la tache ?</label>
                    <input type="text" name="title" id="title"/>
                </div>
                <div id="text_area">
                    <label>Quel est l'objectif ?</label>
                    <textarea name="message" id="message"></textarea>
                </div>
            </div>
            <div id="input_droite">
                <button id="submit">Ajouter votre nouvelle tache !</button>
            </div>
            
            

        </div>
        

        <div class="ensemble_des_divs">
            

            <div class="div_gauche">
                <div class="titre_div">Liste de Tache</div>
                
            </div>
            <div class="div_milieu">
                <div class="titre_div">Taches en cours</div>

            </div>
            <div class="div_droite">
                <div class="titre_div">Taches finies</div>

            </div>
        </div>
    </>
    );
    
    
});