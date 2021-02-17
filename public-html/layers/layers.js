var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_areas_protegidas_hn_1 = new ol.format.GeoJSON();
var features_areas_protegidas_hn_1 = format_areas_protegidas_hn_1.readFeatures(json_areas_protegidas_hn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_protegidas_hn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_protegidas_hn_1.addFeatures(features_areas_protegidas_hn_1);
var lyr_areas_protegidas_hn_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areas_protegidas_hn_1, 
                style: style_areas_protegidas_hn_1,
                interactive: true,
                title: '<img src="styles/legend/areas_protegidas_hn_1.png" /> areas_protegidas_hn'
            });
var format_Drenajes_Cuencas_2 = new ol.format.GeoJSON();
var features_Drenajes_Cuencas_2 = format_Drenajes_Cuencas_2.readFeatures(json_Drenajes_Cuencas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenajes_Cuencas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenajes_Cuencas_2.addFeatures(features_Drenajes_Cuencas_2);
var lyr_Drenajes_Cuencas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drenajes_Cuencas_2, 
                style: style_Drenajes_Cuencas_2,
                interactive: true,
                title: '<img src="styles/legend/Drenajes_Cuencas_2.png" /> Drenajes_Cuencas'
            });
var format_departamentos_hn_3 = new ol.format.GeoJSON();
var features_departamentos_hn_3 = format_departamentos_hn_3.readFeatures(json_departamentos_hn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departamentos_hn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departamentos_hn_3.addFeatures(features_departamentos_hn_3);
var lyr_departamentos_hn_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_departamentos_hn_3, 
                style: style_departamentos_hn_3,
                interactive: true,
                title: '<img src="styles/legend/departamentos_hn_3.png" /> departamentos_hn'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_areas_protegidas_hn_1.setVisible(true);lyr_Drenajes_Cuencas_2.setVisible(true);lyr_departamentos_hn_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_areas_protegidas_hn_1,lyr_Drenajes_Cuencas_2,lyr_departamentos_hn_3];
lyr_areas_protegidas_hn_1.set('fieldAliases', {'NUMEROS': 'NUMEROS', 'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', 'DECRETO_NO': 'DECRETO_NO', 'OBSERVACIO': 'OBSERVACIO', 'Perimeter': 'Perimeter', 'Area': 'Area', });
lyr_Drenajes_Cuencas_2.set('fieldAliases', {'arcid': 'arcid', 'from_node': 'from_node', 'to_node': 'to_node', 'HydroID': 'HydroID', 'GridID': 'GridID', 'NextDownID': 'NextDownID', 'DrainID': 'DrainID', 'ID_Cuenca': 'ID_Cuenca', 'Cuenca': 'Cuenca', 'ID_CBHN_02': 'ID_CBHN_02', });
lyr_departamentos_hn_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEOCODIGO': 'GEOCODIGO', 'NOMBRE': 'NOMBRE', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'ACRES': 'ACRES', 'SQ_MILES': 'SQ_MILES', 'SQ_KM': 'SQ_KM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_areas_protegidas_hn_1.set('fieldImages', {'NUMEROS': '', 'NOMBRE': '', 'CATEGORIA': '', 'DECRETO_NO': '', 'OBSERVACIO': '', 'Perimeter': '', 'Area': '', });
lyr_Drenajes_Cuencas_2.set('fieldImages', {'arcid': 'TextEdit', 'from_node': 'TextEdit', 'to_node': 'TextEdit', 'HydroID': 'TextEdit', 'GridID': 'TextEdit', 'NextDownID': 'TextEdit', 'DrainID': 'TextEdit', 'ID_Cuenca': 'TextEdit', 'Cuenca': 'TextEdit', 'ID_CBHN_02': 'TextEdit', });
lyr_departamentos_hn_3.set('fieldImages', {'OBJECTID': 'Range', 'GEOCODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'ACRES': 'TextEdit', 'SQ_MILES': 'TextEdit', 'SQ_KM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_areas_protegidas_hn_1.set('fieldLabels', {'NUMEROS': 'no label', 'NOMBRE': 'inline label', 'CATEGORIA': 'no label', 'DECRETO_NO': 'no label', 'OBSERVACIO': 'no label', 'Perimeter': 'no label', 'Area': 'no label', });
lyr_Drenajes_Cuencas_2.set('fieldLabels', {'arcid': 'no label', 'from_node': 'no label', 'to_node': 'no label', 'HydroID': 'no label', 'GridID': 'no label', 'NextDownID': 'no label', 'DrainID': 'no label', 'ID_Cuenca': 'inline label', 'Cuenca': 'inline label', 'ID_CBHN_02': 'no label', });
lyr_departamentos_hn_3.set('fieldLabels', {'OBJECTID': 'no label', 'GEOCODIGO': 'inline label', 'NOMBRE': 'inline label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'ACRES': 'no label', 'SQ_MILES': 'no label', 'SQ_KM': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_departamentos_hn_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});