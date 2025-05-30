@props(['gtag', 'addsense'])

@if($gtag)
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ $gtag }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '{{ $gtag }}');
    </script>
@endif

@if($addsense)
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={{ $addsense }}" crossorigin="anonymous"></script>
@endif
