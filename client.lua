RegisterNetEvent('fr3kless_notify:shownotify', function(tytul, wiadomosc, czas)
    ShowNotify(tytul, wiadomosc, czas)
end)

function ShowNotify(tytul, wiadomosc, czas)
    SendNUIMessage({
        type = "nowenotify",
        tytul = tytul,
        wiadomosc = wiadomosc,
        czas = czas,
    })
end

RegisterCommand('testfr3klessnotify', function()
    TriggerEvent('fr3kless_notify:shownotify', 'Powiadomienie', 'realfr3kless#0', 6000)
end)

-- created by ogfr3kless
-- designed by ogfr3kless & soczekkk & mlodyr