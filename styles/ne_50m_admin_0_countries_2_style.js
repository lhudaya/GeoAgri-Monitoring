var size = 0;
var placement = 'point';

var style_ne_50m_admin_0_countries_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'.AppleSystemUIFont\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NAME") !== null) {
        labelText = String(feature.get("NAME"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,255,22,0.4)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.18}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
