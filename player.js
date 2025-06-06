function vTurbChangePlayer() {
    !vTurbOriginalPlayerIsMobile && vTurbDeviceIsMobile || vTurbOriginalPlayerIsMobile && !vTurbDeviceIsMobile ? (vTurbPlayer = vTurbAlternativePlayer, vTurbSrcId = vTurbPlayer.id) : vTurbPlayer = vTurbOriginalPlayer;
    var e = document.getElementById(`vid_${vTurbOriginalPlayer.id}`);
    e && e.remove();
    var t = document.getElementById(`scr_${vTurbOriginalPlayer.id}`);
    t && t.setAttribute("id", `scr_${vTurbSrcId}`)
}

function vTurbCreatSmartvdsElements() {
    var e, t, i;
    "1.7.9" === vTurbPlayer.version ? document.getElementById(`vid_${vTurbPlayer.id}`) || (window, e = document, t = e.getElementById(`scr_${vTurbSrcId}`), (i = e.createElement("DIV")).id = `vid_${vTurbPlayer.id}`, t.parentElement.insertBefore(i, t)) : (document.getElementById(`vid_${vTurbPlayer.id}`) || function(e, t, i) {
        t = e.getElementById(`scr_${vTurbSrcId}`), (i = e.createElement("DIV")).id = `vid_${vTurbPlayer.id}`, i.style.position = "relative", i.style.width = "100%", i.style.padding = `${vTurbPlayer.video_aspect_ratio}% 0 0`, t.parentElement.insertBefore(i, t)
    }(document), document.getElementById(`thumb_${vTurbPlayer.id}`) || function(e, t, i) {
        t = e.getElementById(`vid_${vTurbPlayer.id}`), (i = e.createElement("IMG")).id = `thumb_${vTurbPlayer.id}`, i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.position = "absolute", i.style.objectFit = "cover", i.src = `https://images.converteai.net/${vTurbPlayer.thumbnail_key}`, t.appendChild(i)
    }(document), document.getElementById(`backdrop_${vTurbPlayer.id}`) || function(e, t, i) {
        t = e.getElementById(`vid_${vTurbPlayer.id}`), (i = e.createElement("DIV")).id = `backdrop_${vTurbPlayer.id}`, i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.position = "absolute", i.style.backdropFilter = "blur(5px)", i.style.webkitBackdropFilter = "blur(5px)", t.appendChild(i)
    }(document))
}

function vTurbLoadSmrtvds() {
    var e, t, i, I;
    e = window, t = document, e.smrtvds || (i = e.smrtvds = function() {
        i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments)
    }, e._smrtvds || (e._smrtvds = i), i.push = i, i.loaded = !0, i.version = "1.1", i.queue = [], (I = t.createElement("script")).async = !0, I.src = `https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`, t.getElementsByTagName("head")[0].appendChild(I)), window.smrtvds(`vid_${vTurbPlayer.id}`, vTurbPlayer.org_id, vTurbPlayer.video_id, vTurbPlayer.options)
}

function vTurbSmrtvds() {
    vTurbCreatSmartvdsElements(), vTurbLoadSmrtvds()
}
var vTurbOriginalPlayer = {
        "id": "6823ad2aecd4b2f8fb95f64b",
        "org_id": "77f7f12d-5e90-456d-b45e-7c7f2aa34ed0",
        "name": "vsl mz handerson dominio minha-varias mudan\xe7as",
        "device_type": "desktop",
        "video_aspect_ratio": "56.25",
        "thumbnail_key": "77f7f12d-5e90-456d-b45e-7c7f2aa34ed0/players/6823ad2aecd4b2f8fb95f64b/thumbnail.jpg",
        "cover_key": "77f7f12d-5e90-456d-b45e-7c7f2aa34ed0/players/6823ad2aecd4b2f8fb95f64b/cover.jpg",
        "version": "v1",
        "video_id": "6823993195e262e998061c8e",
        "options": {
            "autoplay": "smartplay",
            "subtitle_active": !1,
            "smart_autoplay_template": "default",
            "theme": "#D52B2B",
            "foreground_color": "#FFFFFF",
            "video": {
                "width": 1920,
                "height": 1080
            },
            "cdn": "cdn.converteai.net",
            "conversion_params": ["sub1"],
            "displays": {
                "big_play": !1,
                "play_pause": !0,
                "backward": !1,
                "subtitle_control": !1,
                "forward": !1,
                "volume": !1,
                "volume_bar": !0,
                "time": !1,
                "fullscreen": !1,
                "seekbar": !1,
                "seekbar_time": !0,
                "speed_control": !1
            },
            "callAction": [],
            "pixels": [],
            "thumbs": [],
            "headlines": [],
            "smart_autoplays": [{
                "id": "smart_autoplay_6823ad2aecd4b2f8fb95f64b_2",
                "name": "1",
                "version": "2",
                "number": 2,
                "template": "image",
                "background_color": null,
                "bottom_text": null,
                "foreground_color": null,
                "top_text": null,
                "animation": {
                    "animation": "pulse",
                    "properties": {
                        "speed": 5
                    }
                },
                "video_start_at": 0,
                "video_end_at": 893,
                "cover_key": null,
                "thumbnail_key": null,
                "elements": [{
                    "id": "smart_autoplay_6823ad2aecd4b2f8fb95f64b_2_element_0",
                    "height": 864,
                    "width": 864,
                    "x": 528,
                    "y": 108,
                    "order": 1,
                    "opacity": .72,
                    "rotation": 0,
                    "type": "image",
                    "properties": {
                        "alt": "Smart AutoPlay",
                        "src": "https://cdn.converteai.net/77f7f12d-5e90-456d-b45e-7c7f2aa34ed0/2025/03/28/67e7019907698100011193e7.png"
                    }
                }],
                "custom_player_preview": null
            }],
            "turbos": [],
            "smart_autoplay_elements": [{
                "id": "smart_autoplay_element_6823ad2aecd4b2f8fb95f64b_0",
                "height": 479.99999999999994,
                "width": 864,
                "x": 528,
                "y": 300,
                "order": 1,
                "opacity": 1,
                "rotation": 0,
                "type": "box",
                "properties": {
                    "color": "rgba(61, 133, 198, 0.93)",
                    "radius": 16,
                    "border": {
                        "size": 4,
                        "color": "#FFFFFF",
                        "type": "solid"
                    }
                }
            }, {
                "id": "smart_autoplay_element_6823ad2aecd4b2f8fb95f64b_1",
                "height": 80,
                "width": 864,
                "x": 528,
                "y": 342.66666666666663,
                "order": 2,
                "opacity": 1,
                "rotation": 0,
                "type": "text",
                "properties": {
                    "size": 53.33333333333333,
                    "value": "Seu v\xeddeo j\xe1 come\xe7ou",
                    "color": "#FFFFFF",
                    "weight": "700",
                    "align": "center"
                }
            }, {
                "id": "smart_autoplay_element_6823ad2aecd4b2f8fb95f64b_2",
                "height": 80,
                "width": 864,
                "x": 528,
                "y": 657.3333333333334,
                "order": 3,
                "opacity": 1,
                "rotation": 0,
                "type": "text",
                "properties": {
                    "size": 53.33333333333333,
                    "value": "Clique para ouvir",
                    "color": "#FFFFFF",
                    "weight": "700",
                    "align": "center"
                }
            }, {
                "id": "smart_autoplay_element_6823ad2aecd4b2f8fb95f64b_3",
                "height": 192,
                "width": 272,
                "x": 824,
                "y": 443.99999999999994,
                "order": 4,
                "opacity": 1,
                "rotation": 0,
                "type": "image",
                "properties": {
                    "alt": "Seu v\xeddeo j\xe1 come\xe7ou",
                    "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHZlcnNpb249IjEuMSIgZmlsbD0iI0ZGRkZGRiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ2Ljc1cHgiIGhlaWdodD0iMzIuNTYzcHgiIHZpZXdCb3g9IjcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIKICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgID4KICAgICAgPHN0eWxlPgogICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBCTElOSyB7CiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICAgIDMzJSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDY2JSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgICAgfQoKICAgICAgICBAa2V5ZnJhbWVzIEJMSU5LIHsKICAgICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfQogICAgICAgICAgMzMlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgNjYlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICB9CgogICAgICAgIC5hbmltYXRpb24gLmJsaW5rXzEgewogICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlOwogICAgICAgICAgYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZTsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18yIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC4zczsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18zIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuNnM7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5zbWFydHBsYXktc3ZnLWNvbG9yIHsKICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyAhaW1wb3J0YW50OwogICAgICAgIH0KCiAgICAgICAgLmFuaW1hdGlvbi5hZGp1c3RhYmxlIHsKICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICcjRkZGRkZGJzsKICAgICAgICB9CiAgICAgIDwvc3R5bGU+CgogICAgICA8ZyBjbGFzcz0iYWRqdXN0YWJsZSBmZyBhbmltYXRpb24iPgogICAgICAgIDxwYXRoIGNsYXNzPSJzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNTMuMjQ5LDM5LjYxNmMtMC4xODYsMC0wLjM3MS0wLjA1MS0wLjUzNy0wLjE1N2wtNDMuNS0yNy43NWMtMC40NjYtMC4yOTctMC42MDMtMC45MTYtMC4zMDYtMS4zODFjMC4yOTgtMC40NjYsMC45MTctMC42MDEsMS4zODEtMC4zMDZsNDMuNSwyNy43NWMwLjQ2NywwLjI5NywwLjYwNCwwLjkxNiwwLjMwNywxLjM4MUM1My45MDEsMzkuNDUzLDUzLjU3OSwzOS42MTYsNTMuMjQ5LDM5LjYxNnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDguODk2LDMzLjQ2N2wxLjY5OSwxLjA4NWMzLjQ5Ny03Ljc5MSwyLjA3My0xNy4yNzEtNC4zMTMtMjMuNjU5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0QzUwLjU4MSwxOC4wMTksNTEuOTEzLDI2LjQ2Myw0OC44OTYsMzMuNDY3eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18zIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00Ni45MjYsMzYuOTU2Yy0wLjYxMiwwLjg2My0xLjI4NiwxLjY5NS0yLjA1OSwyLjQ2OWMtMC4zOTIsMC4zOTEtMC4zOTIsMS4wMjMsMCwxLjQxNGMwLjE5NCwwLjE5NSwwLjQ1LDAuMjkzLDAuNzA3LDAuMjkzYzAuMjU2LDAsMC41MTItMC4wOTgsMC43MDYtMC4yOTNjMC44NzgtMC44NzgsMS42NDItMS44MjQsMi4zMzMtMi44MDdMNDYuOTI2LDM2Ljk1NnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMiBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDIuNTQzLDI5LjQxNWwxLjc3NywxLjEzNWMxLjU0NS01LjMxNSwwLjIyOS0xMS4yOTMtMy45NTMtMTUuNDc2Yy0wLjM5Mi0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwYy0wLjM5MiwwLjM5MS0wLjM5MiwxLjAyMywwLDEuNDE0QzQyLjQ1NCwxOS45ODcsNDMuNjM5LDI0LjkyNSw0Mi41NDMsMjkuNDE1eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00MSwzMy4xNzRjLTAuNTYzLDAuOTQtMS4yMzUsMS44MzctMi4wNDcsMi42NDZjLTAuMzkxLDAuMzkyLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC45MTYtMC45MTQsMS42NzYtMS45MjQsMi4zMTctMi45ODRMNDEsMzMuMTc0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS43NzEsMjUuMDk0bDIuMDAzLDEuMjc3YzAuMDEyLTAuMjAzLDAuMDI5LTAuNDA0LDAuMDI5LTAuNjA5YzAtMy4wNzktMS4yLTUuOTc0LTMuMzgxLTguMTUzYy0wLjM5MS0wLjM5MS0xLjAyMi0wLjM5MS0xLjQxNCwwYy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0QzM0LjY1MiwyMC42NjYsMzUuNjEzLDIyLjgwMiwzNS43NzEsMjUuMDk0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS4wODQsMjkuNDAxYy0wLjQ3NCwxLjE0NS0xLjE3MiwyLjE5Ny0yLjA3NiwzLjFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNjMC4yNTcsMCwwLjUxMy0wLjA5OCwwLjcwNy0wLjI5M2MxLjAwOC0xLjAwNiwxLjc5NS0yLjE3LDIuMzYxLTMuNDNMMzUuMDg0LDI5LjQwMXoiPjwvcGF0aD4KICAgICAgICA8cG9seWdvbiBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgcG9pbnRzPSIyOC4xMjQsMjAuMjE1IDI4LjEyNCwxNC45OTEgMjQuNjM1LDE3Ljk5ICAiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgZD0iTTIwLjkyMSwyMC4zNjZoLTYuNDIzYy0wLjU1MywwLTEsMC41MDgtMSwxLjEzNXY4LjIyOWMwLDAuNjI3LDAuNDQ3LDEuMTM1LDEsMS4xMzVoNy4zNzVsNi4yNSw1Ljg3NVYyNC45NkwyMC45MjEsMjAuMzY2eiI+PC9wYXRoPgogICAgICA8L2c+CiAgICA8L3N2Zz4KICA="
                }
            }],
            "mini_hooks": !1,
            "mini_hooks_elements": [],
            "resume": !0,
            "fake_bar": !0,
            "headline": !1,
            "turbo": !1,
            "turbo_speed": 1,
            "turbo_auto_test": !1,
            "secure": !1,
            "smartplay_options": {
                "top_text": "Seu v\xeddeo j\xe1 come\xe7ou",
                "bottom_text": "Clique para ouvir",
                "foreground_color": "#FFFFFF",
                "background_color": "rgba(61, 133, 198, 0.93)",
                "start_at": 0,
                "end_at": 893,
                "animation": {},
                "custom_preview": null
            },
            "resume_options": {
                "play": "Continuar assistindo?",
                "title": "Voc\xea j\xe1 come\xe7ou a assistir esse v\xeddeo",
                "replay": "Assistir do in\xedcio?",
                "disable_pause": !1,
                "foreground_color": "#FFFFFF",
                "background_color": "#D52B2B"
            },
            "fake_bar_options": {
                "height": 10,
                "alpha": 2,
                "vbar_height": !0,
                "vbar_end": !0,
                "vbar_network": !0,
                "vbar_color": "#d62b2bd1"
            }
        }
    },
    vTurbSrcId = "6823ad2aecd4b2f8fb95f64b",
    vTurbPlayer = vTurbOriginalPlayer,
    vTurbDeviceIsMobile = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),
    vTurbOriginalPlayerIsMobile = "mobile" === vTurbOriginalPlayer.device_type;
vTurbDeviceIsMobile = vTurbDeviceIsMobile && vTurbDeviceIsMobile[0], vTurbSmrtvds();