// ==UserScript==
// @name AdGuard Assistant Beta
// @name:ru Помощник AdGuard Beta
// @name:uk Помічник AdGuard Beta
// @name:pl Asystent AdGuarda Beta
// @name:de AdGuard-Assistent Beta
// @name:zh 使用 AdGuard 助手 Beta
// @name:zh-TW AdGuard 助理 Beta
// @name:he העוזר האישי של אדגארד Beta
// @name:it Assistente AdGuard Beta
// @name:fa دستیار AdGuard Beta
// @name:tr AdGuard Assistant Beta
// @name:ja AdGuardアシスタント Beta
// @name:es Asistente de Adguard Beta
// @name:pt Assistente do AdGuard Beta
// @name:pt-PT Assistente do AdGuard Beta
// @name:ar AdGuardمساعد Beta
// @name:ko AdGuard 도우미 Beta
// @name:sk AdGuard Assistant Beta
// @name:no AdGuard-assistent Beta
// @name:da AdGuard Assistent Beta
// @name:fr Assistant AdGuard  Beta
// @name:id Asisten AdGuard Beta
// @name:sv AdGuard-assistent Beta
// @name:sr AdGuard pomoćnik Beta
// @name:cs AdGuard Asistent Beta
// @name:sl AdGuard Pomočnik Beta
// @name:be Памочнік AdGuard Beta
// @namespace adguard
// @description Provides easy and convenient way to manage filtering right from the browser
// @description:ru Позволяет легко и быстро управлять фильтрацией прямо из браузера
// @description:uk Забезпечує легкий і зручний спосіб керування фільтрацією прямо з веб-переглядача
// @description:pl Zapewnia łatwy i wygodny sposób na zarządzanie filtrowaniem bezpośrednio z przeglądarki
// @description:de Bietet einen einfachen und nützlichen Weg die Filterung direkt im Browser zu verwalten
// @description:zh 提供简单方便的方法来管理浏览器筛选
// @description:zh-TW 提供簡單的且方便的方法以直接地從該瀏覽器管理過濾
// @description:he מספק דרך קלה ונוחה לנהל סינון תקין ישירות מהדפדפן
// @description:it Fornisce un modo facile e comodo per gestire il filtraggio direttamente dal browser
// @description:fa روش راحت و آسان برای مدیریت فیلترینگ مستیق از داخل مرورگر.
// @description:tr Filtrelemeyi, tarayıcıdan doğrudan kolayca yönetmenizi sağlar.
// @description:ja ブラウザから簡単にフィルタリングを管理する便利な機能を提供します。
// @description:es Permite fácilmente gestionar los filtros desde el navegador
// @description:pt Fornece uma maneira fácil e conveniente de gerenciar a filtragem diretamente do seu navegador
// @description:pt-PT Fornece uma forma fácil e conveniente de gerir a filtragem a partir do seu navegador
// @description:ar يوفر طريقه سهله ومريحه لأداره التصفية الحقيقة من المتصفح
// @description:ko 브라우저에서 바로 필터링 관리를 쉽고 간편하게 할 수 있도록 도와줍니다.
// @description:sk Poskytuje jednoduchý a pohodlný spôsob manažmentu filtrov priamo z prehliadača
// @description:no Tilbyr en enkel og praktisk måte å administrere filtrering rett fra nettleseren
// @description:da Sørger for en nem og behagelig måde til at administrere filtrering lige fra browseren
// @description:fr Fournit un moyen facile et pratique pour gérer le filtrage des droit à partir du navigateur
// @description:id Menyediakan cara mudah dan nyaman untuk mengelola penyaringan langsung dari peramban
// @description:sv Erbjuder ett enkelt och bekvämt sätt att hantera filtrering direkt i webbläsaren
// @description:sr Pruža jednostavan i zgodan način upravljanja filtriranjem direktno iz preglednika
// @description:cs Poskytuje snadný a pohodlný způsob správy filtrování přímo z prohlížeče
// @description:sl Omogoča preprost in priročen način za upravljanje filtriranja neposredno iz brskalnika
// @description:be Дазваляе лёгка і хутка кіраваць фільтрацыяй непасрэдна з браўзара
// @version 4.3.14
// @downloadURL https://userscripts.adtidy.org/beta/assistant/4.3/assistant.user.js
// @updateURL https://userscripts.adtidy.org/beta/assistant/4.3/assistant.meta.js
// @homepageURL https://github.com/AdguardTeam/AdguardAssistant
// @include *
// @exclude *://mil.ru/*
// @exclude *wikipedia.org*
// @exclude *icloud.com*
// @exclude *hangouts.google.com*
// @exclude *www.facebook.com/plugins/сomments*
// @exclude *www.facebook.com/v*/plugins*
// @exclude *disqus.com/embed/comments*
// @exclude *vk.com/widget*
// @exclude *twitter.com/intent/*
// @exclude *www.youtube.com/embed/*
// @exclude *player.vimeo.com*
// @exclude *coub.com/embed*
// @exclude *staticxx.facebook.com/connect/xd_arbiter/*
// @exclude *vk.com/q_frame*
// @exclude *tpc.googlesyndication.com*
// @exclude *syndication.twitter.com*
// @exclude *platform.twitter.com*
// @exclude *tutosdeath.blogspot.com*
// @exclude *notifications.google.com*
// @exclude *google.com/recaptcha/*
// @exclude *bizmania.ru/*
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_getResourceText
// @grant   GM_addStyle
// @grant   property:settings
// @run-at document-start
// ==/UserScript==
