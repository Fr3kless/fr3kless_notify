class notyfikacjaaaa {

    constructor(tytul, wiadomosc, czas) {
        this.tytul = tytul
        this.wiadomosc = wiadomosc
        this.czas = czas
        this.id = Math.floor(Math.random() * 5000)
        this.pokasz();
    }

    pokasz() {
        $('.notifications').append(`
            <div class="notification" id="${this.id}">
                <img style="float:left; clear:both;" src="https://cdn.discordapp.com/attachments/1186412416750325901/1186796909558517800/v.png?ex=65948dc0&is=658218c0&hm=ab73a28132d99a71c7b0b5e932b9ca85251e227d2820758a23583330857596d4&" width="40" height="40">
                <p class="notification-tytul">${this.tytul}</p>
                <p class="notification-wiadomosc">${this.wiadomosc}</p>
        `);



        setTimeout(() => {
            this.howaj()
        }, this.czas);
        
    }

    howaj() {
        $(`#${this.id}`).animate({right: "-1000px"}, 300)
        setTimeout(() => {
            $(`#${this.id}`).remove();
        }, 300);
    }
}

window.addEventListener("message", (ev) => {
    if (ev.data.type == "nowenotify") {
        new notyfikacjaaaa(ev.data.tytul, ev.data.wiadomosc, ev.data.czas)
    }
});
