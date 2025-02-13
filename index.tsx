import { $, component$, useSignal, useStore, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

type State = {
    divs: string[] 
}
export default component$(() => {
    useStyles$(styles);

    const state = useStore<State>({ divs : [] });
    const state2 = useStore<State>({ divs : [] });
    const state3 = useStore<State>({ divs : [] });
    const showDialog = useSignal(false);

    const addDiv = $(() => {
        state.divs.push("Nouvelle tache");
    });

    const movDiv1 = (() => {
        state.divs.pop();
        stat1
    })
    
    const moveDiv2 = $(() => {
        state.divs.pop();
        state2.divs.push("Nouvelle tache");
    });

    const moveDiv3 = $(() => {
        state.divs.pop();
        state3.divs.push("Nouvelle tache");
    });

    const dialogOn = $(() => {
        showDialog.value = true;
    })

    const dialogOff = $(() => {
        showDialog.value = false;
    })

    const moveDiv1ANDdialogoff = $(() => {
        moveDiv1();
        dialogOff();
    })

    const moveDiv2ANDdialogoff = $(() => {
        moveDiv2();
        dialogOff();
    })
    const moveDiv3ANDdialogoff = $(() => {
        moveDiv3();
        dialogOff();
    })

    

    return (
        <section>
            <div class='titre'>
                <h1>Mon premier site Qwik</h1>
                <div class="navbar">
                    <a href="#">To Do List</a>
                    <a href="#">Jsp</a>
                    <a href="#">Jsp</a>
                </div>
            </div>
            {showDialog.value && (
                <dialog open>
                    <button name="rediciton2" value="2" onClick$={moveDiv2ANDdialogoff}>2</button>
                    <button name="rediciton3" value="3" onClick$={moveDiv3ANDdialogoff}>3</button>
                </dialog>
                )}
            <h3>Définissez vos taches</h3>
            
            <div class="gros_ensemble">    
                <div class="ensemble">
                    <div class="div_taches">
                        {state.divs.map((div, index) => (
                            <div key={index} class="dans_taches" onClick$={dialogOn}> 
                                {div} 
                            </div>
                        ))}
                        <button name="more_div" value="+" onClick$={addDiv}>+</button>
                    </div>
                    <div class="div_taches">
                        {state2.divs.map((div, index) => (
                            <div key={index} class="dans_taches" onClick$={dialogOn}>
                                {div}
                            </div>
                        ))}
                    </div>
                    <div class="div_taches">
                        {state3.divs.map((div, index) => (
                            <div key={index} class="dans_taches" onClick$={dialogOn}>
                                {div}
                            </div>
                        ))}   
                    </div>
                </div>
            </div>
        </section>
    );
})