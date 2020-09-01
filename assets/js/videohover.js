var $playvideo = $('.playvideo');

$playvideo.on('mouseenter focus', function() {
        $playvideo.get(0).play();
    });
$playvideo.on('mouseout blur', function() {
    $playvideo.get(0).pause();
});

