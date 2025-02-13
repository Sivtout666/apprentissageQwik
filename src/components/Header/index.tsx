import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

import { Link } from "@builder.io/qwik-city";
import House from "~/assets/header/house.svg?jsx";
import ToDo from "~/assets/header/checks.svg?jsx";
import Calendar from "~/assets/header/calendar.svg?jsx";

export default component$(() => {
    useStyles$(styles);

    return (
        <header id="tete">
            <div id="logo">
                <p id="titre">Apprentissage Qwik</p>
            </div>

            <nav>  
                <Link href="/">
                    <span class="icon"><House/></span>
                    <span class="text">Accueil</span>
                </Link>
                <Link href="/ToDoList">
                    <span class="icon"><ToDo/></span>
                    <span class="text">To Do List</span>
                </Link>
                <Link href="/">
                    <span class="icon"><Calendar/></span>
                    <span class="text">Calendrier</span>
                </Link>
            </nav>
        </header>
    );
});