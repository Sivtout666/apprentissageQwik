import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

export default component$(() => {
    useStylesScoped$(styles);


    return(
        <div></div>
    );
});