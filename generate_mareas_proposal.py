# -*- coding: utf-8 -*-
"""
Propuesta de Diseño Web UX/UI para Asociación Mareas
Generador de documento PDF profesional
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY, TA_RIGHT
from reportlab.lib.units import cm, mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, Image, ListFlowable, ListItem, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.graphics.shapes import Drawing, Rect, Circle, Line, String
from reportlab.graphics import renderPDF
from reportlab.graphics.charts.piecharts import Pie
import os

# Registrar fuentes
pdfmetrics.registerFont(TTFont('Microsoft YaHei', '/usr/share/fonts/truetype/chinese/msyh.ttf'))
pdfmetrics.registerFont(TTFont('SimHei', '/usr/share/fonts/truetype/chinese/SimHei.ttf'))
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
pdfmetrics.registerFont(TTFont('Calibri', '/usr/share/fonts/truetype/english/calibri-regular.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSans', '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))

# Registrar familias de fuentes para habilitar negritas
registerFontFamily('Microsoft YaHei', normal='Microsoft YaHei', bold='Microsoft YaHei')
registerFontFamily('SimHei', normal='SimHei', bold='SimHei')
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')
registerFontFamily('Calibri', normal='Calibri', bold='Calibri')

# Colores de marca Mareas
MAREAS_PURPLE = colors.HexColor('#6B2D5B')
MAREAS_TURQUOISE = colors.HexColor('#1A7F72')
MAREAS_GREEN = colors.HexColor('#4A7C59')
MAREAS_DARK = colors.HexColor('#2C3E50')
MAREAS_LIGHT = colors.HexColor('#F8F9FA')
MAREAS_ACCENT = colors.HexColor('#E74C3C')

def create_styles():
    """Crear estilos personalizados para el documento"""
    styles = getSampleStyleSheet()
    
    # Estilo de título de portada
    styles.add(ParagraphStyle(
        name='CoverTitle',
        fontName='Microsoft YaHei',
        fontSize=36,
        leading=44,
        alignment=TA_CENTER,
        textColor=colors.white,
        spaceAfter=20
    ))
    
    # Subtítulo de portada
    styles.add(ParagraphStyle(
        name='CoverSubtitle',
        fontName='SimHei',
        fontSize=18,
        leading=26,
        alignment=TA_CENTER,
        textColor=colors.white,
        spaceAfter=30
    ))
    
    # Título principal H1
    styles.add(ParagraphStyle(
        name='H1',
        fontName='Microsoft YaHei',
        fontSize=24,
        leading=32,
        alignment=TA_LEFT,
        textColor=MAREAS_PURPLE,
        spaceBefore=20,
        spaceAfter=12,
        wordWrap='CJK'
    ))
    
    # Título de sección H2
    styles.add(ParagraphStyle(
        name='H2',
        fontName='Microsoft YaHei',
        fontSize=18,
        leading=26,
        alignment=TA_LEFT,
        textColor=MAREAS_TURQUOISE,
        spaceBefore=16,
        spaceAfter=10,
        wordWrap='CJK'
    ))
    
    # Título de subsección H3
    styles.add(ParagraphStyle(
        name='H3',
        fontName='SimHei',
        fontSize=14,
        leading=20,
        alignment=TA_LEFT,
        textColor=MAREAS_DARK,
        spaceBefore=12,
        spaceAfter=8,
        wordWrap='CJK'
    ))
    
    # Cuerpo de texto
    styles.add(ParagraphStyle(
        name='BodyMareas',
        fontName='SimHei',
        fontSize=11,
        leading=18,
        alignment=TA_LEFT,
        textColor=colors.black,
        spaceBefore=4,
        spaceAfter=8,
        wordWrap='CJK'
    ))
    
    # Texto destacado
    styles.add(ParagraphStyle(
        name='Highlight',
        fontName='SimHei',
        fontSize=12,
        leading=20,
        alignment=TA_LEFT,
        textColor=MAREAS_PURPLE,
        spaceBefore=8,
        spaceAfter=8,
        leftIndent=20,
        wordWrap='CJK'
    ))
    
    # Copy/marketing text
    styles.add(ParagraphStyle(
        name='CopyText',
        fontName='SimHei',
        fontSize=11,
        leading=18,
        alignment=TA_LEFT,
        textColor=MAREAS_DARK,
        spaceBefore=6,
        spaceAfter=6,
        leftIndent=15,
        borderPadding=10,
        wordWrap='CJK'
    ))
    
    # Pie de tabla
    styles.add(ParagraphStyle(
        name='TableCaption',
        fontName='SimHei',
        fontSize=10,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.gray,
        spaceBefore=4,
        spaceAfter=12,
        wordWrap='CJK'
    ))
    
    # Estilo para tabla cabecera
    styles.add(ParagraphStyle(
        name='TableHeader',
        fontName='SimHei',
        fontSize=10,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.white,
        wordWrap='CJK'
    ))
    
    # Estilo para celdas de tabla
    styles.add(ParagraphStyle(
        name='TableCell',
        fontName='SimHei',
        fontSize=9,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.black,
        wordWrap='CJK'
    ))
    
    # Estilo para bullets
    styles.add(ParagraphStyle(
        name='BulletText',
        fontName='SimHei',
        fontSize=11,
        leading=17,
        alignment=TA_LEFT,
        textColor=colors.black,
        leftIndent=25,
        bulletIndent=10,
        spaceBefore=3,
        spaceAfter=3,
        wordWrap='CJK'
    ))
    
    return styles

def create_cover_page(story, styles):
    """Crear página de portada"""
    
    # Tabla para fondo de color
    cover_data = [['']]
    cover_table = Table(cover_data, colWidths=[19*cm], rowHeights=[28*cm])
    cover_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), MAREAS_PURPLE),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    
    story.append(Spacer(1, 60))
    
    # Título principal
    story.append(Paragraph(
        '<b>PROPUESTA DE DISENO WEB</b>',
        styles['CoverTitle']
    ))
    
    story.append(Spacer(1, 20))
    
    # Subtítulo
    story.append(Paragraph(
        'Asociacion Mareas',
        styles['CoverSubtitle']
    ))
    
    story.append(Spacer(1, 10))
    
    # Línea decorativa
    line_data = [['']]
    line_table = Table(line_data, colWidths=[8*cm], rowHeights=[3])
    line_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), MAREAS_TURQUOISE),
    ]))
    story.append(line_table)
    
    story.append(Spacer(1, 30))
    
    # Descripción
    desc_style = ParagraphStyle(
        name='CoverDesc',
        fontName='SimHei',
        fontSize=14,
        leading=22,
        alignment=TA_CENTER,
        textColor=colors.white
    )
    
    story.append(Paragraph(
        'Transformacion estructural hacia la justicia social y la equidad',
        desc_style
    ))
    
    story.append(Spacer(1, 40))
    
    # Información del proyecto
    info_style = ParagraphStyle(
        name='CoverInfo',
        fontName='SimHei',
        fontSize=12,
        leading=18,
        alignment=TA_CENTER,
        textColor=colors.white
    )
    
    story.append(Paragraph(
        'Estructura, Concepto Visual y Mapa de Contenidos',
        info_style
    ))
    
    story.append(Spacer(1, 20))
    story.append(Paragraph(
        'UX/UI Design & Digital Strategy',
        info_style
    ))
    
    story.append(Spacer(1, 80))
    
    # Fecha y ubicación
    story.append(Paragraph(
        'Salou, Cataluna | Marzo 2026',
        info_style
    ))
    
    story.append(PageBreak())

def create_executive_summary(story, styles):
    """Crear resumen ejecutivo"""
    
    story.append(Paragraph('<b>1. RESUMEN EJECUTIVO</b>', styles['H1']))
    
    story.append(Paragraph(
        'Esta propuesta presenta el diseno integral de la plataforma digital para la Asociacion Mareas, '
        'una entidad con sede en Salou que trabaja por la justicia social y los Derechos Humanos desde '
        'una perspectiva de feminismo interseccional e interculturalidad. El proyecto busca posicionar '
        'a Mareas como un "think-and-do tank" moderno, proyectando una imagen profesional de consultoria '
        'sin perder su esencia transformadora y su compromiso con los colectivos vulnerables.',
        styles['BodyMareas']
    ))
    
    story.append(Paragraph(
        'La arquitectura digital propuesta se fundamenta en tres pilares estrategicos: primero, la '
        'creacion de una experiencia de usuario que transmita movimiento y transformacion, haciendo '
        'honor al nombre "Mareas"; segundo, el desarrollo de una narrativa basada en storytelling '
        'que conecte emocionalmente con las personas visitantes; y tercero, la implementacion de '
        'llamadas a la accion claras que faciliten tanto la participacion ciudadana como la '
        'contratacion de servicios de consultoria.',
        styles['BodyMareas']
    ))
    
    story.append(Paragraph(
        'El modelo de referencia visual es Almena Feminista, adaptando su estetica moderna y dinamica '
        'a la identidad propia de Mareas. Se propone una paleta cromatica que evoca transformacion, '
        'feminismo y sostenibilidad: purpuras profundos que simbolizan el empoderamiento feminista, '
        'turquesas que representan la renovacion y el cambio, y verdes organicos que conectan con '
        'la sostenibilidad ambiental y la Agenda 2030.',
        styles['BodyMareas']
    ))
    
    story.append(Spacer(1, 12))
    
    # Objetivos principales
    story.append(Paragraph('<b>Objetivos Estrategicos del Diseno:</b>', styles['H3']))
    
    objectives = [
        ('Engagement Comunitario', 'Crear espacios de participacion que fomenten el sentido de pertenencia y la activacion ciudadana de las personas jovenes, migrantes, mujeres y colectivos LGTBIQA+.'),
        ('Sostenibilidad Economica', 'Posicionar Mareas Consulting & Lab como referente en servicios de consultoria con impacto social, generando ingresos que se reinvierten integramente en fines sociales.'),
        ('Visibilidad e Incidencia', 'Amplificar el alcance de las campanas de incidencia politica y las publicaciones de investigacion, consolidando a Mareas como voz autorizada en justicia social.'),
        ('Transparencia Institucional', 'Comunicar de manera clara el regimen juridico, la gobernanza y el destino de los recursos, construyendo confianza con personas donantes, administraciones y sociedad civil.')
    ]
    
    for obj_title, obj_desc in objectives:
        story.append(Paragraph(f'<b>- {obj_title}:</b> {obj_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 15))

def create_visual_concept(story, styles):
    """Crear sección de concepto visual"""
    
    story.append(Paragraph('<b>2. CONCEPTO VISUAL Y FILOSOFIA DE MARCA</b>', styles['H1']))
    
    story.append(Paragraph('<b>2.1 Metáfora Central: El Movimiento de las Mareas</b>', styles['H2']))
    
    story.append(Paragraph(
        'El concepto visual se articula alrededor de la metáfora del movimiento oceanico: las mareas '
        'representan ciclos de transformacion constante, fuerza natural imparable y la capacidad de '
        'moldear paisajes con persistencia. Esta imagen evoca la propia metodologia de Mareas: '
        'investigacion-accion que genera cambios estructurales profundos a traves de la constancia '
        'y el trabajo colectivo.',
        styles['BodyMareas']
    ))
    
    story.append(Paragraph(
        'Las "9 Mareas" que estructuran la organizacion funcionan como corrientes interconectadas '
        'que, aunque tienen direcciones propias, confluyen en un mismo oceano de justicia social. '
        'El diseno web debe reflejar esta interconexion mediante transiciones fluidas, elementos '
        'visuales que sugieran flujo y movimiento, y una navegacion que permita surfear entre las '
        'diferentes areas sin perder el rumbo.',
        styles['BodyMareas']
    ))
    
    story.append(Paragraph('<b>2.2 Principios de Diseño</b>', styles['H2']))
    
    principles = [
        ('Dinamismo Visual', 'Uso de formas organicas, ondulaciones y transiciones suaves que evocan el movimiento del agua. Las secciones no deben ser bloques estaticos, sino flujos que guian naturalmente hacia la siguiente accion.'),
        ('Espacios Respiratorios', 'Generosos espacios en blanco que permiten que el contenido respire, evitando la saturacion visual. El vacio es tan importante como el contenido para crear jerarquias claras y facilitar la lectura.'),
        ('Tipografia Bold como Elemento de Impacto', 'Titulares grandes, contundentes y legibles que comunican con fuerza los mensajes clave. La tipografia se convierte en protagonista, no solo en vehiculo del texto.'),
        ('Inclusividad Visual', 'Representacion grafica de la diversidad que caracteriza a Mareas: imagenes que muestren personas jovenes, mayores, de diferentes origenes culturales, cuerpos diversos y expresiones de genero variadas.'),
        ('Profesionalismo con Alma', 'Equilibrio entre la estetica corporativa de una consultoria especializada y la calidez de una organizacion militante por los derechos humanos.')
    ]
    
    for prin_title, prin_desc in principles:
        story.append(Paragraph(f'<b>- {prin_title}:</b> {prin_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>2.3 Paleta Cromática</b>', styles['H2']))
    
    story.append(Paragraph(
        'La paleta cromática propuesta combina tonalidades que evocan tanto la profundidad del mar '
        'como la energia del cambio social. Cada color tiene un significado estrategico y se utiliza '
        'de forma consistente en toda la plataforma digital:',
        styles['BodyMareas']
    ))
    
    # Tabla de colores
    color_data = [
        [Paragraph('<b>Color</b>', styles['TableHeader']),
         Paragraph('<b>Codigo HEX</b>', styles['TableHeader']),
         Paragraph('<b>Uso Principal</b>', styles['TableHeader']),
         Paragraph('<b>Significado</b>', styles['TableHeader'])],
        [Paragraph('Purpura Profundo', styles['TableCell']),
         Paragraph('#6B2D5B', styles['TableCell']),
         Paragraph('Headers, CTAs principales, enlaces', styles['TableCell']),
         Paragraph('Empoderamiento feminista, transformacion', styles['TableCell'])],
        [Paragraph('Turquesa Oceanico', styles['TableCell']),
         Paragraph('#1A7F72', styles['TableCell']),
         Paragraph('Subheaders, acentos, iconos', styles['TableCell']),
         Paragraph('Renovacion, sostenibilidad, esperanza', styles['TableCell'])],
        [Paragraph('Verde Organico', styles['TableCell']),
         Paragraph('#4A7C59', styles['TableCell']),
         Paragraph('Elementos de sostenibilidad, ODS', styles['TableCell']),
         Paragraph('Ecologia, Agenda 2030, naturaleza', styles['TableCell'])],
        [Paragraph('Gris Piedra', styles['TableCell']),
         Paragraph('#2C3E50', styles['TableCell']),
         Paragraph('Texto principal, fondos claros', styles['TableCell']),
         Paragraph('Solidez, institucionalidad, seriedad', styles['TableCell'])],
        [Paragraph('Blanco Marea', styles['TableCell']),
         Paragraph('#F8F9FA', styles['TableCell']),
         Paragraph('Fondos, espacios, contraste', styles['TableCell']),
         Paragraph('Claridad, transparencia, apertura', styles['TableCell'])],
        [Paragraph('Coral Acento', styles['TableCell']),
         Paragraph('#E74C3C', styles['TableCell']),
         Paragraph('Alertas, urgencias, CTAs secundarios', styles['TableCell']),
         Paragraph('Pasion, urgencia, activacion', styles['TableCell'])]
    ]
    
    color_table = Table(color_data, colWidths=[3*cm, 2.5*cm, 5*cm, 5*cm])
    color_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), MAREAS_PURPLE),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
        ('BACKGROUND', (0, 1), (-1, 1), MAREAS_LIGHT),
        ('BACKGROUND', (0, 2), (-1, 2), colors.white),
        ('BACKGROUND', (0, 3), (-1, 3), MAREAS_LIGHT),
        ('BACKGROUND', (0, 4), (-1, 4), colors.white),
        ('BACKGROUND', (0, 5), (-1, 5), MAREAS_LIGHT),
        ('BACKGROUND', (0, 6), (-1, 6), colors.white),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    
    story.append(Spacer(1, 12))
    story.append(color_table)
    story.append(Paragraph('Tabla 1. Paleta cromática de marca Mareas', styles['TableCaption']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>2.4 Tipografía</b>', styles['H2']))
    
    story.append(Paragraph(
        'La seleccion tipografica prioriza la legibilidad, la accesibilidad y la personalidad de marca. '
        'Se propone una combinacion de dos familias tipograficas que funcionan en armonia:',
        styles['BodyMareas']
    ))
    
    typo_data = [
        [Paragraph('<b>Familia</b>', styles['TableHeader']),
         Paragraph('<b>Uso</b>', styles['TableHeader']),
         Paragraph('<b>Características</b>', styles['TableHeader']),
         Paragraph('<b>Pesos</b>', styles['TableHeader'])],
        [Paragraph('Montserrat', styles['TableCell']),
         Paragraph('Titulares, headers, CTAs', styles['TableCell']),
         Paragraph('Sans-serif geometrica, alta legibilidad, personalidad moderna', styles['TableCell']),
         Paragraph('Bold (700), SemiBold (600), Regular (400)', styles['TableCell'])],
        [Paragraph('Source Sans Pro', styles['TableCell']),
         Paragraph('Cuerpo de texto, parrafos, descripciones', styles['TableCell']),
         Paragraph('Sans-serif humanista, excelente lectura en pantalla', styles['TableCell']),
         Paragraph('Regular (400), Italic, SemiBold (600)', styles['TableCell'])]
    ]
    
    typo_table = Table(typo_data, colWidths=[3.5*cm, 4*cm, 5.5*cm, 4.5*cm])
    typo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), MAREAS_TURQUOISE),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
        ('BACKGROUND', (0, 1), (-1, 1), colors.white),
        ('BACKGROUND', (0, 2), (-1, 2), MAREAS_LIGHT),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    
    story.append(Spacer(1, 12))
    story.append(typo_table)
    story.append(Paragraph('Tabla 2. Sistema tipografico propuesto', styles['TableCaption']))

def create_information_architecture(story, styles):
    """Crear sección de arquitectura de información"""
    
    story.append(Paragraph('<b>3. ARQUITECTURA DE INFORMACION</b>', styles['H1']))
    
    story.append(Paragraph('<b>3.1 Estructura General del Sitio</b>', styles['H2']))
    
    story.append(Paragraph(
        'La arquitectura de informacion se disena para facilitar dos flujos principales de navegacion: '
        'el flujo de participacion ciudadana, orientado a personas que desean sumarse a la comunidad, '
        'y el flujo de servicios profesionales, dirigido a instituciones y empresas que buscan '
        'consultoria especializada. Esta dualidad se resuelve mediante una navegacion clara y CTAs '
        'diferenciados que guian a cada tipo de usuario hacia su destino.',
        styles['BodyMareas']
    ))
    
    story.append(Paragraph('<b>3.2 Mapa del Sitio Completo</b>', styles['H2']))
    
    # Estructura de menús
    menu_structure = """
    <b>NAVEGACION PRINCIPAL</b>
    
    <b>1. INICIO</b>
       - Hero Section con manifiesto
       - Las 9 Mareas (grid interactivo)
       - Ultimas novedades
       - Llamadas a la accion
    
    <b>2. QUIENES SOMOS</b>
       2.1. Nuestra Historia
       2.2. Mision, Vision y Valores
       2.3. Modelo Investigacion-Accion
       2.4. Compromiso ODS y Agenda 2030
       2.5. Equipo y Gobernanza
       2.6. Transparencia
            - Regimen Juridico (Ley 4/2008)
            - Memorias Anuales
            - Cuentas y Presupuestos
            - Politica de Privacidad
    
    <b>3. LAS 9 MAREAS (Areas de Especializacion)</b>
       3.1. Mareas Juvenil
            - Proyectos activos
            - Investigaciones
            - Como participar
       3.2. Mareas Feministas
       3.3. Mareas Migrantes
       3.4. Mareas en Movimiento y Pau
       3.5. Mareas Diversas (LGTBIQA+)
       3.6. Mareas Incidencia
       3.7. Mareas Cooperacion
       3.8. Mareas Lab
       3.9. Mareas Consulting
    
    <b>4. SERVICIOS (Mareas Consulting & Lab)</b>
       4.1. Consultoria Estrategica
            - Evaluacion de politicas publicas
            - Diseno de proyectos sociales
            - Acompanamiento institucional
       4.2. Auditoria Digital Etica
            - Soberania tecnologica
            - Etica de datos
            - Herramientas libres
       4.3. Formacion y Capacitacion
            - Catálogo de formaciones
            - Formacion a medida
            - Recursos educativos
       4.4. Comunicacion Estrategica
            - Campanas de incidencia
            - Narrativas transformadoras
            - Estrategia digital
    
    <b>5. INCIDENCIA Y RECURSOS</b>
       5.1. Publicaciones
            - Informes de investigacion
            - Cuadernos de trabajo
            - Artículos académicos
       5.2. Guias y Herramientas
            - Guia de soberania tecnologica
            - Manuales de incidencia
            - Kits de participacion
       5.3. Campanas Activas
       5.4. Blog y Noticias
    
    <b>6. CONTACTO Y PARTICIPACION</b>
       6.1. Unete a Mareas
            - Formulario de asociacion
            - Beneficios de ser socio/a
            - Cuotas y compromisos
       6.2. Solicitar Servicios
       6.3. Colabora
            - Donaciones
            - Alianzas
            - Voluntariado
       6.4. Contacto Directo
    """
    
    # Crear tabla con la estructura
    menu_style = ParagraphStyle(
        name='MenuStructure',
        fontName='SimHei',
        fontSize=10,
        leading=15,
        alignment=TA_LEFT,
        textColor=colors.black,
        leftIndent=10,
        wordWrap='CJK'
    )
    
    story.append(Paragraph(menu_structure.replace('\n', '<br/>'), menu_style))
    
    story.append(Spacer(1, 15))
    
    story.append(Paragraph('<b>3.3 Menu Secundario (Footer)</b>', styles['H2']))
    
    footer_items = [
        ('Legal', 'Aviso Legal, Politica de Privacidad, Politica de Cookies, Condiciones de Uso'),
        ('Redes Sociales', 'Instagram, Twitter/X, LinkedIn, Facebook, YouTube'),
        ('Contacto', 'Direccion, Telefono, Email general, Email de prensa'),
        ('Recursos', 'RSS Feed, Newsletter, Accesibilidad, Mapa del sitio')
    ]
    
    footer_data = [
        [Paragraph('<b>Seccion</b>', styles['TableHeader']),
         Paragraph('<b>Elementos</b>', styles['TableHeader'])]
    ]
    
    for section, elements in footer_items:
        footer_data.append([
            Paragraph(section, styles['TableCell']),
            Paragraph(elements, styles['TableCell'])
        ])
    
    footer_table = Table(footer_data, colWidths=[4*cm, 13.5*cm])
    footer_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), MAREAS_DARK),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
        ('BACKGROUND', (0, 1), (-1, 1), colors.white),
        ('BACKGROUND', (0, 2), (-1, 2), MAREAS_LIGHT),
        ('BACKGROUND', (0, 3), (-1, 3), colors.white),
        ('BACKGROUND', (0, 4), (-1, 4), MAREAS_LIGHT),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    
    story.append(footer_table)
    story.append(Paragraph('Tabla 3. Estructura del menu de footer', styles['TableCaption']))

def create_homepage_copies(story, styles):
    """Crear sección de copys para homepage"""
    
    story.append(Paragraph('<b>4. COPYS PERSUASIVOS PARA LA PAGINA DE INICIO</b>', styles['H1']))
    
    story.append(Paragraph(
        'Los textos de la homepage estan disenados para conectar emocionalmente con las personas '
        'visitantes, comunicar el impacto del trabajo de Mareas y generar conversion hacia las '
        'acciones deseadas: asociarse, contratar servicios o participar en campanas. El tono es '
        'inclusivo, movilizador y profesional.',
        styles['BodyMareas']
    ))
    
    story.append(Spacer(1, 10))
    
    # Hero Section
    story.append(Paragraph('<b>4.1 Hero Section</b>', styles['H2']))
    
    hero_box_style = ParagraphStyle(
        name='HeroBox',
        fontName='SimHei',
        fontSize=12,
        leading=20,
        alignment=TA_LEFT,
        textColor=MAREAS_DARK,
        leftIndent=15,
        rightIndent=15,
        borderPadding=15,
        backColor=MAREAS_LIGHT,
        wordWrap='CJK'
    )
    
    story.append(Paragraph('<b>HEADLINE PRINCIPAL:</b>', styles['H3']))
    story.append(Paragraph(
        '<i>"Transformacion estructural hacia la justicia social y la equidad"</i>',
        styles['Highlight']
    ))
    
    story.append(Paragraph('<b>SUBHEADLINE:</b>', styles['H3']))
    story.append(Paragraph(
        '<i>"Somos una organizacion de base juvenil e intercultural que trabaja por los Derechos Humanos '
        'desde el feminismo interseccional. Investigamos, incidimos y acompanamos a comunidades y '
        'administraciones en la construccion de una sociedad mas justa."</i>',
        hero_box_style
    ))
    
    story.append(Spacer(1, 8))
    
    story.append(Paragraph('<b>CTAs HERO:</b>', styles['H3']))
    cta_items = [
        ('CTA Principal (Boton Purpura)', 'Conoce nuestras 9 Mareas'),
        ('CTA Secundario (Boton Outline)', 'Solicita consultoria'),
        ('CTA Terciario (Texto enlazado)', 'Descubre como asociarte')
    ]
    
    for cta_name, cta_text in cta_items:
        story.append(Paragraph(f'<b>- {cta_name}:</b> "{cta_text}"', styles['BulletText']))
    
    story.append(Spacer(1, 15))
    
    # Sección Las 9 Mareas
    story.append(Paragraph('<b>4.2 Seccion "Las 9 Mareas"</b>', styles['H2']))
    
    story.append(Paragraph('<b>INTRODUCCION A LA SECCION:</b>', styles['H3']))
    story.append(Paragraph(
        '<i>"Nueve corrientes de cambio que confluyen en un mismo oceano de justicia social. '
        'Cada Marea es un area de especializacion que trabaja de forma interconectada, '
        'generando sinergias y multiplicando el impacto de nuestras acciones."</i>',
        hero_box_style
    ))
    
    story.append(Spacer(1, 10))
    
    # Copys para cada Marea
    story.append(Paragraph('<b>COPYS PARA CADA MAREA (Cards del Grid):</b>', styles['H3']))
    
    mareas_copies = [
        ('Mareas Juvenil', 
         'Empoderamos a las nuevas generaciones como agentes de cambio.',
         'Investigamos las realidades de las juventudes y promovemos la participacion ciudadana, con especial enfasis en juventudes migradas, exiliadas y refugiadas.'),
        ('Mareas Feministas',
         'Transversalizamos los feminismos interseccionales.',
         'Promovemos la equidad de genero real mediante investigaciones, formaciones y proyectos orientados a erradicar todas las violencias machistas.'),
        ('Mareas Migrantes',
         'Construimos puentes hacia la inclusion plena.',
         'Desarrollamos estrategias y narrativas transformadoras que combaten la discriminacion estructural y garantizan la inclusion de las personas migradas.'),
        ('Mareas en Movimiento y Pau',
         'Defendemos el derecho a moverse con dignidad.',
         'Acompanamos en movilidad humana, asilo y refugio, e impulsamos la cultura de paz y la memoria democratica.'),
        ('Mareas Diversas',
         'Visibilizamos y acompanamos las disidencias.',
         'Abordamos las realidades LGTBIQA+ desde una perspectiva interseccional, con enfasis en personas migrantes del colectivo.'),
        ('Mareas Incidencia',
         'Transformamos leyes, politicas y sociedades.',
         'Disenamos estrategias de incidencia politica, juridica y ciudadana para promover cambios estructurales.'),
        ('Mareas Cooperacion',
         'Tejemos redes para la democracia participativa.',
         'Impulsamos la cooperacion internacional y la participacion comunitaria con metodologias innovadoras.'),
        ('Mareas Lab',
         'Laboratorio de innovacion social y digital.',
         'Investigamos y disenamos servicios de transformacion y auditoria digital etica para la soberania tecnologica.'),
        ('Mareas Consulting',
         'Consultoria con impacto social real.',
         'Prestamos servicios de consultoria estrategica y comunicacion con perspectiva de derechos humanos.')
    ]
    
    for marea_name, tagline, description in mareas_copies:
        story.append(Paragraph(f'<b>- {marea_name}</b>', styles['BulletText']))
        story.append(Paragraph(f'  Tagline: "{tagline}"', styles['BulletText']))
        story.append(Paragraph(f'  Descripcion: {description}', styles['BulletText']))
    
    story.append(Spacer(1, 15))
    
    # Sección de impacto
    story.append(Paragraph('<b>4.3 Seccion de Impacto y Transparencia</b>', styles['H2']))
    
    story.append(Paragraph('<b>TITULO DE SECCION:</b>', styles['H3']))
    story.append(Paragraph(
        '<i>"Nuestro compromiso con la transparencia y el impacto"</i>',
        styles['Highlight']
    ))
    
    story.append(Paragraph('<b>TEXTO INTRODUCTORIO:</b>', styles['H3']))
    story.append(Paragraph(
        '<i>"Como entidad regulada por la Ley 4/2008 de Cataluna, rendimos cuentas de cada euro '
        'invertido y cada impacto generado. Los ingresos de nuestros servicios de consultoria se '
        'reinvertiran integramente en fines sociales. Somos un proyecto colectivo, transparente '
        'y transformador."</i>',
        hero_box_style
    ))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>4.4 Seccion de Participacion (CTA Final)</b>', styles['H2']))
    
    story.append(Paragraph('<b>HEADLINE:</b>', styles['H3']))
    story.append(Paragraph(
        '<i>"El cambio empieza cuando decides ser parte de el"</i>',
        styles['Highlight']
    ))
    
    story.append(Paragraph('<b>TEXTO DE ACOMPAÑAMIENTO:</b>', styles['H3']))
    story.append(Paragraph(
        '<i>"Sea cual sea tu origen, tu edad o tu historia, hay un lugar para ti en Mareas. '
        'Asociate, colabora, solicita nuestros servicios o simplemente mantente informado/a. '
        'Juntos y juntas somos una marea imparable."</i>',
        hero_box_style
    ))
    
    story.append(Spacer(1, 10))
    
    # CTAs finales
    story.append(Paragraph('<b>CTAs FINALES:</b>', styles['H3']))
    final_ctas = [
        ('Quiero asociarme', 'Boton purpura solido'),
        ('Necesito consultoria', 'Boton turquesa solido'),
        ('Quiero donar', 'Boton outline'),
        ('Suscribirme a la newsletter', 'Campo email + boton')
    ]
    
    for cta_text, cta_style in final_ctas:
        story.append(Paragraph(f'<b>- "{cta_text}"</b> ({cta_style})', styles['BulletText']))

def create_design_elements(story, styles):
    """Crear sección de elementos de diseño"""
    
    story.append(Paragraph('<b>5. ELEMENTOS DE DISENO</b>', styles['H1']))
    
    story.append(Paragraph('<b>5.1 Iconografía</b>', styles['H2']))
    
    story.append(Paragraph(
        'El sistema iconografico debe transmitir movimiento, fluidez y conexion entre elementos. '
        'Se recomienda utilizar iconos de linea (line icons) con un grosor consistente que permita '
        'buena legibilidad en diferentes tamanos y contextos.',
        styles['BodyMareas']
    ))
    
    icon_categories = [
        ('Navegacion y Acciones', 
         'Flechas onduladas, ondas, circulos concentricos, puntos conectados por lineas curvas'),
        ('Areas de Marea',
         'Iconos especificos para cada una de las 9 areas: juventud (estrella), feminismo (venus), '
         'migracion (aves volando), paz (paloma arcoiris), diversidad (bandera), incidencia (megafono), '
         'cooperacion (manos), tecnologia (circuitos), consultoria (grafico ascendente)'),
        ('Redes Sociales y Comunicacion',
         'Iconos personalizados de redes sociales con el estilo de marca'),
        ('Accesibilidad',
         'Iconos de accesibilidad universal integrados naturalmente en el diseño')
    ]
    
    for cat_name, cat_desc in icon_categories:
        story.append(Paragraph(f'<b>- {cat_name}:</b> {cat_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>5.2 Fotografia e Imagineria</b>', styles['H2']))
    
    story.append(Paragraph(
        'La seleccion fotografica es crucial para transmitir los valores de Mareas. Las imagenes deben '
        'mostrar diversidad real, evitando la representacion estereotipada o tokenista de colectivos. '
        'Se priorizan fotografias de personas reales de la comunidad sobre imagenes de stock genericas.',
        styles['BodyMareas']
    ))
    
    story.append(Paragraph('<b>Criterios de Seleccion Fotografica:</b>', styles['H3']))
    
    photo_criteria = [
        ('Diversidad Autentica', 'Personas de diferentes edades, origenes, cuerpos, generos y expresiones. Evitar posados forzados o sonrisas artificiales.'),
        ('Accion Real', 'Preferir imagenes de personas en accion: en talleres, manifestaciones, reuniones, espacios comunitarios.'),
        ('Cercania y Calidez', 'Fotografias que transmitan proximidad, complicidad y trabajo colectivo.'),
        ('Iluminacion Natural', 'Evitar flash directo; preferir luz natural que genere ambientes acogedores.'),
        ('Composicion Dinamica', 'Angulos interesantes, planos detalle, secuencias que sugieran movimiento.'),
        ('Consistencia Cromatica', 'Aplicar overlays o filtros sutiles que armonicen las imagenes con la paleta de marca.')
    ]
    
    for crit_name, crit_desc in photo_criteria:
        story.append(Paragraph(f'<b>- {crit_name}:</b> {crit_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>5.3 Elementos Graficos Decorativos</b>', styles['H2']))
    
    story.append(Paragraph(
        'Para reforzar la identidad visual de "Mareas", se proponen los siguientes elementos graficos '
        'que pueden utilizarse como fondos, separadores o acentos en diferentes secciones:',
        styles['BodyMareas']
    ))
    
    graphic_elements = [
        ('Olas Abstractas', 'Formas ondulantes SVG que simulan olas del mar, utilizadas como divisores entre secciones o fondos sutiles.'),
        ('Puntos de Conexion', 'Patrones de puntos conectados por lineas que evocan redes comunitarias y trabajo en red.'),
        ('Circulos Concentricos', 'Representacion visual de las ondas que genera una marea, ideales para destacar citas o testimonios.'),
        ('Gradientes Fluidos', 'Transiciones suaves entre los colores de marca que generan sensacion de flujo y movimiento.'),
        ('Texturas Organicas', 'Texturas sutiles inspiradas en elementos naturales (arena, agua, vegetacion) para fondos.')
    ]
    
    for elem_name, elem_desc in graphic_elements:
        story.append(Paragraph(f'<b>- {elem_name}:</b> {elem_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>5.4 Sistema de Botones y CTAs</b>', styles['H2']))
    
    button_data = [
        [Paragraph('<b>Tipo</b>', styles['TableHeader']),
         Paragraph('<b>Estilo Visual</b>', styles['TableHeader']),
         Paragraph('<b>Uso</b>', styles['TableHeader'])],
        [Paragraph('Primario', styles['TableCell']),
         Paragraph('Fondo purpura solido, texto blanco, bordes redondeados (8px)', styles['TableCell']),
         Paragraph('Acciones principales: asociarse, donar, contactar', styles['TableCell'])],
        [Paragraph('Secundario', styles['TableCell']),
         Paragraph('Fondo turquesa solido, texto blanco, bordes redondeados', styles['TableCell']),
         Paragraph('Acciones de servicio: solicitar consultoria, ver servicios', styles['TableCell'])],
        [Paragraph('Outline', styles['TableCell']),
         Paragraph('Sin fondo, borde purpura/turquesa, texto del mismo color', styles['TableCell']),
         Paragraph('Acciones secundarias: leer mas, ver detalles', styles['TableCell'])],
        [Paragraph('Ghost', styles['TableCell']),
         Paragraph('Sin fondo ni borde, solo texto con subrayado animado', styles['TableCell']),
         Paragraph('Enlaces en texto, navegacion secundaria', styles['TableCell'])],
        [Paragraph('Icono', styles['TableCell']),
         Paragraph('Boton circular con icono central, efecto hover', styles['TableCell']),
         Paragraph('Redes sociales, compartir, descargas', styles['TableCell'])]
    ]
    
    button_table = Table(button_data, colWidths=[2.5*cm, 7*cm, 6*cm])
    button_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), MAREAS_GREEN),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
        ('BACKGROUND', (0, 1), (-1, 1), colors.white),
        ('BACKGROUND', (0, 2), (-1, 2), MAREAS_LIGHT),
        ('BACKGROUND', (0, 3), (-1, 3), colors.white),
        ('BACKGROUND', (0, 4), (-1, 4), MAREAS_LIGHT),
        ('BACKGROUND', (0, 5), (-1, 5), colors.white),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    
    story.append(button_table)
    story.append(Paragraph('Tabla 4. Sistema de botones y llamadas a la accion', styles['TableCaption']))

def create_wireframes_concept(story, styles):
    """Crear sección de wireframes conceptuales"""
    
    story.append(Paragraph('<b>6. WIREFRAMES CONCEPTUALES</b>', styles['H1']))
    
    story.append(Paragraph('<b>6.1 Homepage - Estructura de Secciones</b>', styles['H2']))
    
    story.append(Paragraph(
        'La pagina de inicio se estructura en un scroll vertical que guia a las personas visitantes '
        'a traves de un recorrido narrativo: desde el impacto emocional del hero, pasando por el '
        'descubrimiento de las areas de trabajo, hasta la conversion final en participacion.',
        styles['BodyMareas']
    ))
    
    homepage_sections = [
        ('SECCION 1: HERO (100vh)', 
         'Fondo con video o imagen de fondo con overlay gradiente purpura. '
         'Headline grande centrado con tipografia bold. Subheadline de apoyo. '
         'Dos CTAs principales lado a lado. Scroll indicator animado.'),
        ('SECCION 2: LAS 9 MAREAS (Grid 3x3)', 
         'Titulo de seccion con descripcion breve. '
         'Grid de 9 cards responsive (3x3 en desktop, 2 columnas en tablet, 1 columna en movil). '
         'Cada card incluye icono, titulo, tagline y enlace.'),
        ('SECCION 3: HISTORIA + IMPACTO', 
         'Split layout: izquierda texto, derecha imagen/video. '
         'Metricas de impacto con numeros animados. '
         'Enlace a "Conoce mas sobre nosotros".'),
        ('SECCION 4: NOTICIAS DESTACADAS', 
         'Carousel de 3-4 noticias/cards. '
         'Imagen, titulo, fecha, extracto breve. '
         'Enlace a blog completo.'),
        ('SECCION 5: TESTIMONIOS', 
         'Slider con testimonios de personas asociadas y clientes. '
         'Foto, cita, nombre y rol. '
         'Fondo con patron de olas abstractas.'),
        ('SECCION 6: CTA PARTICIPACION', 
         'Fondo solido purpura. '
         'Headline movilizador. '
         'Tres botones CTA: asociarse, servicios, donar. '
         'Formulario newsletter compacto.')
    ]
    
    for sec_name, sec_desc in homepage_sections:
        story.append(Paragraph(f'<b>{sec_name}</b>', styles['BulletText']))
        story.append(Paragraph(f'{sec_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 15))
    
    story.append(Paragraph('<b>6.2 Pagina "Quienes Somos"</b>', styles['H2']))
    
    story.append(Paragraph(
        'Esta pagina debe construir la credibilidad institucional de Mareas, mostrando su solidez '
        'organizativa y su compromiso con la transparencia. El tono debe ser profesional pero cercano.',
        styles['BodyMareas']
    ))
    
    about_sections = [
        ('HEADER', 'Breadcrumb + Titulo "Quienes Somos"'),
        ('INTRODUCCION', 'Texto de mision y vision con imagen de equipo'),
        ('LINEA DE TIEMPO', 'Historia de la organizacion con hitos clave'),
        ('MODELO DE TRABAJO', 'Infografia del modelo Investigacion-Accion'),
        ('COMPROMISO ODS', 'Visualizacion de los ODS priorizados por Mareas'),
        ('EQUIPO', 'Grid con fotos y roles del equipo directivo'),
        ('TRANSPARENCIA', 'Accordions con documentos legales, cuentas y memorias')
    ]
    
    for about_sec, about_desc in about_sections:
        story.append(Paragraph(f'<b>- {about_sec}:</b> {about_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>6.3 Pagina de Servicios (Mareas Consulting & Lab)</b>', styles['H2']))
    
    story.append(Paragraph(
        'Esta pagina funciona como landing de conversion para clientes institucionales. Debe tener '
        'un enfoque mas corporativo sin perder la identidad de marca, destacando el valor diferencial '
        'de contratar servicios de una entidad social.',
        styles['BodyMareas']
    ))
    
    services_sections = [
        ('HERO SERVICIOS', 'Headline: "Consultoria con impacto social real". Propuesta de valor clara.'),
        ('SERVICIOS PRINCIPALES', 'Cards con iconos para cada tipo de servicio: Consultoria, Auditoria Digital, Formacion, Comunicacion.'),
        ('PROCESO DE TRABAJO', 'Pasos numerados: Contacto inicial, Diagnostico, Propuesta, Ejecucion, Evaluacion.'),
        ('CASOS DE EXITO', 'Testimonios de clientes, proyectos destacados con metricas de impacto.'),
        ('PRECIO Y CONTRATACION', 'Explicacion del modelo (no lucro), formulario de contacto.'),
        ('ENFOQUE ESS', 'Destacar que los ingresos se reinvierten en fines sociales.')
    ]
    
    for serv_sec, serv_desc in services_sections:
        story.append(Paragraph(f'<b>- {serv_sec}:</b> {serv_desc}', styles['BulletText']))

def create_technical_recommendations(story, styles):
    """Crear sección de recomendaciones técnicas"""
    
    story.append(Paragraph('<b>7. RECOMENDACIONES TECNICAS</b>', styles['H1']))
    
    story.append(Paragraph('<b>7.1 Tecnologías Recomendadas</b>', styles['H2']))
    
    tech_stack = [
        ('CMS/Plataforma', 'WordPress con tema personalizado o Webflow para mayor flexibilidad de diseno'),
        ('Framework CSS', 'Tailwind CSS para desarrollo rapido y consistente'),
        ('JavaScript', 'GSAP para animaciones fluidas, Swiper para carruseles'),
        ('Optimizacion', 'Lazy loading, WebP para imagenes, minificacion de CSS/JS'),
        ('SEO', 'Schema markup para organizacion, meta tags dinamicos, sitemap XML'),
        ('Analitica', 'Google Analytics 4 + Matomo (alternativa etica), Hotjar para heatmaps'),
        ('Accesibilidad', 'Cumplimiento WCAG 2.1 AA, navegacion por teclado, lectores de pantalla')
    ]
    
    for tech_name, tech_desc in tech_stack:
        story.append(Paragraph(f'<b>- {tech_name}:</b> {tech_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>7.2 Responsive Design</b>', styles['H2']))
    
    story.append(Paragraph(
        'El sitio debe funcionar perfectamente en todos los dispositivos, priorizando la experiencia '
        'movil dado que gran parte de la audiencia objetivo (personas jovenes) accede principalmente '
        'desde smartphones.',
        styles['BodyMareas']
    ))
    
    breakpoints = [
        ('Movil', '< 640px', 'Navegacion hamburger, cards en columna, texto legible'),
        ('Tablet', '640px - 1024px', 'Navegacion compacta, grid 2 columnas, ajustes de espaciado'),
        ('Desktop', '> 1024px', 'Navegacion completa, grid 3+ columnas, animaciones completas')
    ]
    
    bp_data = [
        [Paragraph('<b>Dispositivo</b>', styles['TableHeader']),
         Paragraph('<b>Breakpoint</b>', styles['TableHeader']),
         Paragraph('<b>Adaptaciones</b>', styles['TableHeader'])]
    ]
    
    for device, bp, adaptations in breakpoints:
        bp_data.append([
            Paragraph(device, styles['TableCell']),
            Paragraph(bp, styles['TableCell']),
            Paragraph(adaptations, styles['TableCell'])
        ])
    
    bp_table = Table(bp_data, colWidths=[3*cm, 3.5*cm, 9*cm])
    bp_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), MAREAS_PURPLE),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
        ('BACKGROUND', (0, 1), (-1, 1), colors.white),
        ('BACKGROUND', (0, 2), (-1, 2), MAREAS_LIGHT),
        ('BACKGROUND', (0, 3), (-1, 3), colors.white),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    
    story.append(bp_table)
    story.append(Paragraph('Tabla 5. Breakpoints para diseño responsive', styles['TableCaption']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>7.3 Consideraciones de Accesibilidad</b>', styles['H2']))
    
    story.append(Paragraph(
        'Mareas trabaja por la inclusion, por lo que su plataforma digital debe ser accesible para '
        'todas las personas, independientemente de sus capacidades. Se recomienda:',
        styles['BodyMareas']
    ))
    
    accessibility_items = [
        'Contraste minimo de 4.5:1 para texto normal y 3:1 para texto grande',
        'Textos alternativos descriptivos en todas las imagenes',
        'Estructura de encabezados jerarquica (H1-H6)',
        'Focus visible para navegacion por teclado',
        'Etiquetas ARIA para elementos interactivos',
        'Opcion de modo alto contraste',
        'Plugin de accesibilidad (UserWay o similar)',
        'Videos con subtitulos y transcripciones'
    ]
    
    for item in accessibility_items:
        story.append(Paragraph(f'- {item}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>7.4 Integraciones Recomendadas</b>', styles['H2']))
    
    integrations = [
        ('Newsletter', 'Mailchimp o Buttondown para gestion de suscriptores'),
        ('Donaciones', 'Stripe o PayPal con formulario integrado'),
        ('Formularios', 'Typeform o Gravity Forms para formularios avanzados'),
        ('Redes Sociales', 'Feed integrado de Instagram, botones de compartir'),
        ('Calendario', 'Calendly para agendar reuniones de consultoria'),
        ('CRM', 'CiviCRM o HubSpot para gestion de contactos y donantes')
    ]
    
    for int_name, int_desc in integrations:
        story.append(Paragraph(f'<b>- {int_name}:</b> {int_desc}', styles['BulletText']))

def create_content_guidelines(story, styles):
    """Crear sección de directrices de contenido"""
    
    story.append(Paragraph('<b>8. DIRECTRICES DE TONO Y CONTENIDO</b>', styles['H1']))
    
    story.append(Paragraph('<b>8.1 Tono de Comunicacion</b>', styles['H2']))
    
    story.append(Paragraph(
        'El tono de comunicacion de Mareas debe reflejar su identidad como organizacion transformadora, '
        'inclusiva y profesional. Se articula en cuatro dimensiones principales:',
        styles['BodyMareas']
    ))
    
    tone_dimensions = [
        ('Movilizador', 'Lenguaje que invita a la accion, que genera sensacion de urgencia sin ser alarmista. '
         'Usa verbos activos y construye comunidad.'),
        ('Inclusivo', 'Uso de lenguaje no sexista, reconocimiento de la diversidad de identidades, '
         'evitacion de terminos excluyentes o estigmatizantes.'),
        ('Profesional', 'Seriedad en el tratamiento de temas institucionales, rigor en la presentacion '
         'de datos y argumentaciones, credibilidad ante clientes y administraciones.'),
        ('Cercano', 'Evitar el lenguaje excesivamente tecnico o burocratico, usar ejemplos concretos, '
         'humanizar las historias y mostrar el rostro humano de la organizacion.')
    ]
    
    for tone_name, tone_desc in tone_dimensions:
        story.append(Paragraph(f'<b>- {tone_name}:</b> {tone_desc}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>8.2 Lineamientos de Lenguaje Inclusivo</b>', styles['H2']))
    
    story.append(Paragraph(
        'Mareas asume el feminismo interseccional como eje transversal, por lo que el lenguaje debe '
        'reflejar este compromiso. Se proponen las siguientes pautas:',
        styles['BodyMareas']
    ))
    
    inclusive_guidelines = [
        'Uso de desdoblamientos cuando sea necesario: "las personas asociadas", "las y los participantes"',
        'Preferencia por colectivos: "la comunidad", "el equipo", "la personas jovenes"',
        'Evitar el generico masculino: "la humanidad" en lugar de "el hombre"',
        'Reconocimiento de identidades no binarias: usar "persona" o nombre propio cuando sea apropiado',
        'Visibilizar la diversidad en ejemplos y casos de uso',
        'Revisar traducciones para evitar sesgos de genero',
        'Incluir terminologia propia del colectivo LGTBIQA+ con respeto y precision'
    ]
    
    for guideline in inclusive_guidelines:
        story.append(Paragraph(f'- {guideline}', styles['BulletText']))
    
    story.append(Spacer(1, 10))
    
    story.append(Paragraph('<b>8.3 Estrategia de Contenidos</b>', styles['H2']))
    
    content_strategy = [
        ('Blog', 'Articulos de opinion, analisis de actualidad, reflexiones del equipo. Frecuencia: 2-4 mensuales.'),
        ('Publicaciones', 'Informes de investigacion, guias practicas, cuadernos de trabajo. Frecuencia: trimestral.'),
        ('Newsletter', 'Resumen mensual de actividades, convocatorias, novedades. Formato: email con enlaces.'),
        ('Redes Sociales', 'Contenido diario: Instagram (visual), Twitter/X (opinion), LinkedIn (profesional), Facebook (comunidad).'),
        ('Multimedia', 'Videos cortos para redes, podcasts sobre temas de justicia social, webinars formativos.')
    ]
    
    for content_type, content_desc in content_strategy:
        story.append(Paragraph(f'<b>- {content_type}:</b> {content_desc}', styles['BulletText']))

def main():
    """Función principal para generar el PDF"""
    
    output_path = '/home/z/my-project/download/Propuesta_Web_Mareas.pdf'
    
    # Crear documento
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        rightMargin=2*cm,
        leftMargin=2*cm,
        topMargin=2*cm,
        bottomMargin=2*cm,
        title='Propuesta_Web_Mareas',
        author='Z.ai',
        creator='Z.ai',
        subject='Propuesta de diseño web UX/UI para Asociación Mareas'
    )
    
    # Crear estilos
    styles = create_styles()
    
    # Construir historia del documento
    story = []
    
    # Crear secciones
    create_cover_page(story, styles)
    create_executive_summary(story, styles)
    create_visual_concept(story, styles)
    story.append(PageBreak())
    create_information_architecture(story, styles)
    story.append(PageBreak())
    create_homepage_copies(story, styles)
    story.append(PageBreak())
    create_design_elements(story, styles)
    story.append(PageBreak())
    create_wireframes_concept(story, styles)
    story.append(PageBreak())
    create_technical_recommendations(story, styles)
    story.append(PageBreak())
    create_content_guidelines(story, styles)
    
    # Construir PDF
    doc.build(story)
    
    print(f"PDF generado exitosamente: {output_path}")

if __name__ == '__main__':
    main()
