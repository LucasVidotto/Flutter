define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const transitions = flutter_sdk.src__widgets__transitions;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const bottom_navigation_bar = flutter_sdk.src__material__bottom_navigation_bar;
  const bottom_navigation_bar_item = flutter_sdk.src__widgets__bottom_navigation_bar_item;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const navigator = flutter_sdk.src__widgets__navigator;
  const container = flutter_sdk.src__widgets__container;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const floating_action_button = flutter_sdk.src__material__floating_action_button;
  const $switch = flutter_sdk.src__material__switch;
  const binding = flutter_sdk.src__widgets__binding;
  const text_button = flutter_sdk.src__material__text_button;
  const theme = flutter_sdk.src__material__theme;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const box_decoration = flutter_sdk.src__painting__box_decoration;
  const decoration_image = flutter_sdk.src__painting__decoration_image;
  const _network_image_web = flutter_sdk.src__painting___network_image_web;
  const box_fit = flutter_sdk.src__painting__box_fit;
  const border_radius = flutter_sdk.src__painting__border_radius;
  const image = flutter_sdk.src__widgets__image;
  const text_style = flutter_sdk.src__painting__text_style;
  const dialog = flutter_sdk.src__material__dialog;
  const icon_data = flutter_sdk.src__widgets__icon_data;
  const form = flutter_sdk.src__widgets__form;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const gradient = flutter_sdk.src__painting__gradient;
  const alignment = flutter_sdk.src__painting__alignment;
  const media_query = flutter_sdk.src__widgets__media_query;
  const text_form_field = flutter_sdk.src__material__text_form_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const input_border = flutter_sdk.src__material__input_border;
  const text_input = flutter_sdk.src__services__text_input;
  const fractional_offset = flutter_sdk.src__painting__fractional_offset;
  const borders = flutter_sdk.src__painting__borders;
  const gesture_detector = flutter_sdk.src__widgets__gesture_detector;
  const rounded_rectangle_border = flutter_sdk.src__painting__rounded_rectangle_border;
  const change_notifier = flutter_sdk.src__foundation__change_notifier;
  const routes = flutter_sdk.src__widgets__routes;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const box_border = flutter_sdk.src__painting__box_border;
  const animations = flutter_sdk.src__animation__animations;
  const sliver = flutter_sdk.src__widgets__sliver;
  const sliver_fill = flutter_sdk.src__widgets__sliver_fill;
  const box = flutter_sdk.src__rendering__box;
  const text_field = flutter_sdk.src__material__text_field;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const animation_controller = flutter_sdk.src__animation__animation_controller;
  const tween = flutter_sdk.src__animation__tween;
  const curves = flutter_sdk.src__animation__curves;
  const ticker_provider = flutter_sdk.src__widgets__ticker_provider;
  const animation = flutter_sdk.src__animation__animation;
  const vector_math_64 = flutter_sdk.vector_math_64;
  const custom_paint = flutter_sdk.src__rendering__custom_paint;
  const tween_sequence = flutter_sdk.src__animation__tween_sequence;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var Products = Object.create(dart.library);
  var register = Object.create(dart.library);
  var Login = Object.create(dart.library);
  var App = Object.create(dart.library);
  var Loading = Object.create(dart.library);
  var Form = Object.create(dart.library);
  var Store = Object.create(dart.library);
  var list = Object.create(dart.library);
  var info = Object.create(dart.library);
  var cart = Object.create(dart.library);
  var flutter_spinkit = Object.create(dart.library);
  var feed = Object.create(dart.library);
  var chasing_dots = Object.create(dart.library);
  var circle = Object.create(dart.library);
  var cube_grid = Object.create(dart.library);
  var dancing_square = Object.create(dart.library);
  var double_bounce = Object.create(dart.library);
  var dual_ring = Object.create(dart.library);
  var fading_circle = Object.create(dart.library);
  var fading_cube = Object.create(dart.library);
  var fading_four = Object.create(dart.library);
  var fading_grid = Object.create(dart.library);
  var folding_cube = Object.create(dart.library);
  var hour_glass = Object.create(dart.library);
  var piano_wave = Object.create(dart.library);
  var pouring_hour_glass = Object.create(dart.library);
  var pouring_hour_glass_refined = Object.create(dart.library);
  var pulse = Object.create(dart.library);
  var pumping_heart = Object.create(dart.library);
  var ring = Object.create(dart.library);
  var ripple = Object.create(dart.library);
  var rotating_circle = Object.create(dart.library);
  var rotating_plain = Object.create(dart.library);
  var spinning_circle = Object.create(dart.library);
  var spinning_lines = Object.create(dart.library);
  var square_circle = Object.create(dart.library);
  var three_bounce = Object.create(dart.library);
  var three_in_out = Object.create(dart.library);
  var wandering_cubes = Object.create(dart.library);
  var wave = Object.create(dart.library);
  var delay_tween = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isEmpty = dartx.isEmpty;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $abs = dartx.abs;
  var $length = dartx.length;
  var $truncate = dartx.truncate;
  var $reversed = dartx.reversed;
  var $isOdd = dartx.isOdd;
  var $addAll = dartx.addAll;
  var $_equals = dartx._equals;
  var $removeLast = dartx.removeLast;
  var $insert = dartx.insert;
  var $values = dartx.values;
  var $asMap = dartx.asMap;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    BuildContextToLoadingPage: () => (T.BuildContextToLoadingPage = dart.constFn(dart.fnType(Loading.LoadingPage, [framework.BuildContext])))(),
    BuildContextToLoginPage: () => (T.BuildContextToLoginPage = dart.constFn(dart.fnType(Login.LoginPage, [framework.BuildContext])))(),
    BuildContextToHomePage: () => (T.BuildContextToHomePage = dart.constFn(dart.fnType(main.HomePage, [framework.BuildContext])))(),
    BuildContextToFormPage: () => (T.BuildContextToFormPage = dart.constFn(dart.fnType(Form.FormPage, [framework.BuildContext])))(),
    BuildContextToRegisterPage: () => (T.BuildContextToRegisterPage = dart.constFn(dart.fnType(register.RegisterPage, [framework.BuildContext])))(),
    BuildContextToMyGalery: () => (T.BuildContextToMyGalery = dart.constFn(dart.fnType(Products.MyGalery, [framework.BuildContext])))(),
    BuildContextToList: () => (T.BuildContextToList = dart.constFn(dart.fnType(list.List, [framework.BuildContext])))(),
    BuildContextToInfo: () => (T.BuildContextToInfo = dart.constFn(dart.fnType(info.Info, [framework.BuildContext])))(),
    BuildContextToCart: () => (T.BuildContextToCart = dart.constFn(dart.fnType(cart.Cart, [framework.BuildContext])))(),
    BuildContextToWidget: () => (T.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    IdentityMapOfString$BuildContextToWidget: () => (T.IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, T.BuildContextToWidget())))(),
    WidgetN: () => (T.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    BuildContextAndWidgetNToMaterialApp: () => (T.BuildContextAndWidgetNToMaterialApp = dart.constFn(dart.fnType(app.MaterialApp, [framework.BuildContext, T.WidgetN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    JSArrayOfBottomNavigationBarItem: () => (T.JSArrayOfBottomNavigationBarItem = dart.constFn(_interceptors.JSArray$(bottom_navigation_bar_item.BottomNavigationBarItem)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    boolTovoid: () => (T.boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))(),
    SetOfvoid: () => (T.SetOfvoid = dart.constFn(core.Set$(dart.void)))(),
    LinkedHashSetOfSetOfvoid: () => (T.LinkedHashSetOfSetOfvoid = dart.constFn(collection.LinkedHashSet$(T.SetOfvoid())))(),
    LinkedHashSetOfvoid: () => (T.LinkedHashSetOfvoid = dart.constFn(collection.LinkedHashSet$(dart.void)))(),
    BuildContextToAlertDialog: () => (T.BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))(),
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    StringTovoid: () => (T.StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    AlwaysStoppedAnimationOfdouble: () => (T.AlwaysStoppedAnimationOfdouble = dart.constFn(animations.AlwaysStoppedAnimation$(core.double)))(),
    FutureOfObjectN: () => (T.FutureOfObjectN = dart.constFn(async.Future$(T.ObjectN())))(),
    LinkedHashSetOfFutureOfObjectN: () => (T.LinkedHashSetOfFutureOfObjectN = dart.constFn(collection.LinkedHashSet$(T.FutureOfObjectN())))(),
    JSArrayOfShadow: () => (T.JSArrayOfShadow = dart.constFn(_interceptors.JSArray$(ui.Shadow)))(),
    LinkedHashSetOfString: () => (T.LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))(),
    StringToText: () => (T.StringToText = dart.constFn(dart.fnType(text.Text, [core.String])))(),
    BuildContextAndintToWidget: () => (T.BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))(),
    TweenOfdouble: () => (T.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))(),
    ListOfWidget: () => (T.ListOfWidget = dart.constFn(core.List$(framework.Widget)))(),
    intToPositioned: () => (T.intToPositioned = dart.constFn(dart.fnType(basic.Positioned, [core.int])))(),
    intToStack: () => (T.intToStack = dart.constFn(dart.fnType(basic.Stack, [core.int])))(),
    intToTransform: () => (T.intToTransform = dart.constFn(dart.fnType(basic.Transform, [core.int])))(),
    TweenSequenceOfdouble: () => (T.TweenSequenceOfdouble = dart.constFn(tween_sequence.TweenSequence$(core.double)))(),
    TweenSequenceItemOfdouble: () => (T.TweenSequenceItemOfdouble = dart.constFn(tween_sequence.TweenSequenceItem$(core.double)))(),
    ConstantTweenOfdouble: () => (T.ConstantTweenOfdouble = dart.constFn(tween.ConstantTween$(core.double)))(),
    JSArrayOfTweenSequenceItemOfdouble: () => (T.JSArrayOfTweenSequenceItemOfdouble = dart.constFn(_interceptors.JSArray$(T.TweenSequenceItemOfdouble())))(),
    AnimationStatusTovoid: () => (T.AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation.AnimationStatus])))(),
    intToDottedScaleXWidget: () => (T.intToDottedScaleXWidget = dart.constFn(dart.fnType(piano_wave.DottedScaleXWidget, [core.int])))(),
    ListOfdouble: () => (T.ListOfdouble = dart.constFn(core.List$(core.double)))(),
    intTodouble: () => (T.intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))(),
    AnimationOfdouble: () => (T.AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))(),
    BuildContextAndWidgetNToCustomPaint: () => (T.BuildContextAndWidgetNToCustomPaint = dart.constFn(dart.fnType(basic.CustomPaint, [framework.BuildContext, T.WidgetN()])))(),
    intToScaleTransition: () => (T.intToScaleTransition = dart.constFn(dart.fnType(transitions.ScaleTransition, [core.int])))(),
    intToSizedBox: () => (T.intToSizedBox = dart.constFn(dart.fnType(basic.SizedBox, [core.int])))(),
    MapEntryOfint$Widget: () => (T.MapEntryOfint$Widget = dart.constFn(core.MapEntry$(core.int, framework.Widget)))(),
    intAndWidgetToMapEntryOfint$Widget: () => (T.intAndWidgetToMapEntryOfint$Widget = dart.constFn(dart.fnType(T.MapEntryOfint$Widget(), [core.int, framework.Widget])))(),
    BuildContextAndWidgetNToSizedBox: () => (T.BuildContextAndWidgetNToSizedBox = dart.constFn(dart.fnType(basic.SizedBox, [framework.BuildContext, T.WidgetN()])))(),
    intToScaleYWidget: () => (T.intToScaleYWidget = dart.constFn(dart.fnType(wave.ScaleYWidget, [core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Home"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Register"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Login"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Sem Produtos"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Falta de Produtos"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Cancel"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58646
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[8] || CT.C8
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "AlertDialog Title"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "AlertDialog description"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C[13] || CT.C13,
        [BorderSide_width]: 1,
        [BorderSide_color]: C[14] || CT.C14
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58172
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 15,
        [Icon_icon]: C[17] || CT.C17
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: 13,
        [Icon_icon]: C[17] || CT.C17
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 40
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 70
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 20
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 80,
        [EdgeInsets_left]: 0
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 30
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57415
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_shadows]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[26] || CT.C26
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 30,
        [EdgeInsets_left]: 0
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2000000
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1200000
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[31] || CT.C31,
        [Interval_end]: 0.6,
        [Interval_begin]: 0.1
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[31] || CT.C31,
        [Interval_end]: 0.7,
        [Interval_begin]: 0.2
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[31] || CT.C31,
        [Interval_end]: 0.8,
        [Interval_begin]: 0.3
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[31] || CT.C31,
        [Interval_end]: 0.9,
        [Interval_begin]: 0.4
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[31] || CT.C31,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[37] || CT.C37,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2400000
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "circle",
        [_Enum_index]: 1
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[41] || CT.C41,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: piano_wave.SpinKitPianoWaveType.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: piano_wave.SpinKitPianoWaveType.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 1
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: piano_wave.SpinKitPianoWaveType.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C42() {
      return C[42] = dart.constList([C[43] || CT.C43, C[44] || CT.C44, C[45] || CT.C45], piano_wave.SpinKitPianoWaveType);
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[37] || CT.C37,
        [Interval_end]: 0.9,
        [Interval_begin]: 0
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[49] || CT.C49,
        [Interval_end]: 1,
        [Interval_begin]: 0.9
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: pumping_heart.SpinKitPumpCurve.prototype
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[52] || CT.C52,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[37] || CT.C37,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: ring.SpinKitRingCurve.prototype
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[55] || CT.C55,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1800000
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[37] || CT.C37,
        [Interval_end]: 0.75,
        [Interval_begin]: 0
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[37] || CT.C37,
        [Interval_end]: 1,
        [Interval_begin]: 0.25
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[31] || CT.C31,
        [Interval_end]: 0.5,
        [Interval_begin]: 0
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[41] || CT.C41,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 3000000
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1400000
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 50000
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "rectangle",
        [_Enum_index]: 0
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[67] || CT.C67,
        [Interval_end]: 0.25,
        [Interval_begin]: 0
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[67] || CT.C67,
        [Interval_end]: 0.5,
        [Interval_begin]: 0.25
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[67] || CT.C67,
        [Interval_end]: 0.75,
        [Interval_begin]: 0.5
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C[67] || CT.C67,
        [Interval_end]: 1,
        [Interval_begin]: 0.75
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 0
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 1
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C71() {
      return C[71] = dart.constList([C[72] || CT.C72, C[73] || CT.C73, C[74] || CT.C74], wave.SpinKitWaveType);
    }
  }, false);
  var C = Array(75).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "package:flutter_app/View/Products.dart",
    "package:flutter_app/View/register.dart",
    "package:flutter_app/View/Login.dart",
    "package:flutter_app/Controller/App.dart",
    "package:flutter_app/View/Loading.dart",
    "package:flutter_app/Model/Form.dart",
    "package:flutter_app/Model/Store.dart",
    "package:flutter_app/View/list.dart",
    "package:flutter_app/View/info.dart",
    "package:flutter_app/View/cart.dart",
    "package:flutter_app/View/feed.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/chasing_dots.dart",
    "package:flutter_spinkit/src/chasing_dots.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/circle.dart",
    "package:flutter_spinkit/src/circle.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/cube_grid.dart",
    "package:flutter_spinkit/src/cube_grid.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/dancing_square.dart",
    "package:flutter_spinkit/src/dancing_square.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/double_bounce.dart",
    "package:flutter_spinkit/src/double_bounce.dart",
    "package:flutter_spinkit/src/dual_ring.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/fading_circle.dart",
    "package:flutter_spinkit/src/fading_circle.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/fading_cube.dart",
    "package:flutter_spinkit/src/fading_cube.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/fading_four.dart",
    "package:flutter_spinkit/src/fading_four.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/fading_grid.dart",
    "package:flutter_spinkit/src/fading_grid.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/folding_cube.dart",
    "package:flutter_spinkit/src/folding_cube.dart",
    "package:flutter_spinkit/src/hour_glass.dart",
    "package:flutter_spinkit/src/piano_wave.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/piano_wave.dart",
    "package:flutter_spinkit/src/pouring_hour_glass.dart",
    "package:flutter_spinkit/src/pouring_hour_glass_refined.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/pulse.dart",
    "package:flutter_spinkit/src/pulse.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/pumping_heart.dart",
    "package:flutter_spinkit/src/pumping_heart.dart",
    "package:flutter_spinkit/src/ring.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/ripple.dart",
    "package:flutter_spinkit/src/ripple.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/rotating_circle.dart",
    "package:flutter_spinkit/src/rotating_circle.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/rotating_plain.dart",
    "package:flutter_spinkit/src/rotating_plain.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/spinning_circle.dart",
    "package:flutter_spinkit/src/spinning_circle.dart",
    "package:flutter_spinkit/src/spinning_lines.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/square_circle.dart",
    "package:flutter_spinkit/src/square_circle.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/three_bounce.dart",
    "package:flutter_spinkit/src/three_bounce.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/three_in_out.dart",
    "package:flutter_spinkit/src/three_in_out.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/wandering_cubes.dart",
    "package:flutter_spinkit/src/wandering_cubes.dart",
    "package:flutter_spinkit/src/wave.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/wave.dart",
    "package:flutter_spinkit/src/tweens/delay_tween.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
        }, T.VoidToNull())});
    });
  };
  main.AppWight = class AppWight extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.AppWight.new({key: key});
    }
    build(context) {
      return new transitions.AnimatedBuilder.new({animation: App.AppController.instance, builder: dart.fn((context, child) => new app.MaterialApp.new({theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue, primaryColor: colors.Colors.orange, brightness: App.AppController.instance.isLight ? ui.Brightness.light : ui.Brightness.dark}), initialRoute: "/list", routes: new (T.IdentityMapOfString$BuildContextToWidget()).from(["/login", dart.fn(context => new Loading.LoadingPage.new(), T.BuildContextToLoadingPage()), "/", dart.fn(context => new Login.LoginPage.new(), T.BuildContextToLoginPage()), "/home", dart.fn(context => new main.HomePage.new(), T.BuildContextToHomePage()), "/form", dart.fn(context => new Form.FormPage.new(), T.BuildContextToFormPage()), "/register", dart.fn(context => new register.RegisterPage.new(), T.BuildContextToRegisterPage()), "/galery", dart.fn(context => new Products.MyGalery.new(), T.BuildContextToMyGalery()), "/list", dart.fn(context => new list.List.new(), T.BuildContextToList()), "/info", dart.fn(context => new info.Info.new(), T.BuildContextToInfo()), "/cart", dart.fn(context => new cart.Cart.new(), T.BuildContextToCart())])}), T.BuildContextAndWidgetNToMaterialApp())});
    }
  };
  (main.AppWight.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.AppWight.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.AppWight.prototype;
  dart.addTypeTests(main.AppWight);
  dart.addTypeCaches(main.AppWight);
  dart.setMethodSignature(main.AppWight, () => ({
    __proto__: dart.getMethods(main.AppWight.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.AppWight, I[0]);
  main.HomePage = class HomePage extends framework.StatefulWidget {
    createState() {
      return new main.HomePageState.new();
    }
    static ['_#new#tearOff']() {
      return new main.HomePage.new();
    }
  };
  (main.HomePage.new = function() {
    main.HomePage.__proto__.new.call(this);
    ;
  }).prototype = main.HomePage.prototype;
  dart.addTypeTests(main.HomePage);
  dart.addTypeCaches(main.HomePage);
  dart.setMethodSignature(main.HomePage, () => ({
    __proto__: dart.getMethods(main.HomePage.__proto__),
    createState: dart.fnType(framework.State$(main.HomePage), [])
  }));
  dart.setLibraryUri(main.HomePage, I[0]);
  var texto = dart.privateName(main, "HomePageState.texto");
  var counter = dart.privateName(main, "HomePageState.counter");
  main.HomePageState = class HomePageState extends framework.State$(main.HomePage) {
    get texto() {
      return this[texto];
    }
    set texto(value) {
      super.texto = value;
    }
    get counter() {
      return this[counter];
    }
    set counter(value) {
      this[counter] = value;
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Home Page"), actions: T.JSArrayOfWidget().of([new main.CustomSwitch.new()])}), bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({currentIndex: 0, backgroundColor: new ui.Color.fromARGB(68, 180, 50, 152), items: T.JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.person), label: "Dados", backgroundColor: new ui.Color.fromARGB(0, 255, 255, 255)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.shopping_basket), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Produtos"}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.home), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Home"})]), onTap: dart.fn(index => {
            switch (index) {
              case 0:
                {
                  navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), context, "/form", {arguments: new (T.IdentityMapOfString$String()).from(["nome", this.texto])});
                  break;
                }
              case 1:
                {
                  navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/galery");
                  break;
                }
              case 2:
                {
                  navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/home");
                  break;
                }
            }
          }, T.intTovoid())}), body: new container.Container.new({width: 1 / 0, height: 1 / 0, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new text.Text.new("Contador : " + dart.str(this.counter)), new container.Container.new({height: 20}), new main.CustomSwitch.new(), new container.Container.new({height: 50}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([new container.Container.new({width: 50, height: 50, color: colors.Colors.red}), new container.Container.new({width: 50, height: 50, color: colors.Colors.blue}), new container.Container.new({width: 50, height: 50, color: colors.Colors.green})])})])})}), floatingActionButton: new floating_action_button.FloatingActionButton.new({child: new icon.Icon.new(icons.Icons.add), onPressed: dart.fn(() => {
            this.setState(dart.fn(() => {
              this.counter = this.counter + 1;
            }, T.VoidTovoid()));
          }, T.VoidTovoid())})});
    }
    static ['_#new#tearOff']() {
      return new main.HomePageState.new();
    }
  };
  (main.HomePageState.new = function() {
    this[texto] = Store.Store.login;
    this[counter] = 0;
    main.HomePageState.__proto__.new.call(this);
    ;
  }).prototype = main.HomePageState.prototype;
  dart.addTypeTests(main.HomePageState);
  dart.addTypeCaches(main.HomePageState);
  dart.setMethodSignature(main.HomePageState, () => ({
    __proto__: dart.getMethods(main.HomePageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.HomePageState, I[0]);
  dart.setFieldSignature(main.HomePageState, () => ({
    __proto__: dart.getFields(main.HomePageState.__proto__),
    texto: dart.finalFieldType(core.String),
    counter: dart.fieldType(core.int)
  }));
  main.CustomSwitch = class CustomSwitch extends framework.StatelessWidget {
    build(context) {
      return new $switch.Switch.new({value: App.AppController.instance.isLight, onChanged: dart.fn(value => {
          App.AppController.instance.changeTheme();
        }, T.boolTovoid())});
    }
    static ['_#new#tearOff']() {
      return new main.CustomSwitch.new();
    }
  };
  (main.CustomSwitch.new = function() {
    main.CustomSwitch.__proto__.new.call(this);
    ;
  }).prototype = main.CustomSwitch.prototype;
  dart.addTypeTests(main.CustomSwitch);
  dart.addTypeCaches(main.CustomSwitch);
  dart.setMethodSignature(main.CustomSwitch, () => ({
    __proto__: dart.getMethods(main.CustomSwitch.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.CustomSwitch, I[0]);
  main.main = function main$0() {
    return binding.runApp(new main.AppWight.new());
  };
  Products.MyGalery = class MyGalery extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Products.MyGalery.new({key: key});
    }
    createState() {
      return new Products._MyGaleryState.new();
    }
  };
  (Products.MyGalery.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Products.MyGalery.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Products.MyGalery.prototype;
  dart.addTypeTests(Products.MyGalery);
  dart.addTypeCaches(Products.MyGalery);
  dart.setMethodSignature(Products.MyGalery, () => ({
    __proto__: dart.getMethods(Products.MyGalery.__proto__),
    createState: dart.fnType(framework.State$(Products.MyGalery), [])
  }));
  dart.setLibraryUri(Products.MyGalery, I[1]);
  var _loadingImageIds = dart.privateName(Products, "_loadingImageIds");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  Products._MyGaleryState = class _MyGaleryState extends framework.State$(Products.MyGalery) {
    [_loadingImageIds]() {
    }
    build(context) {
      let style = text_button.TextButton.styleFrom({primary: theme.Theme.of(context).colorScheme.onPrimary});
      let _buttonText = "Click";
      let intens = 10;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Galeri"), leading: new icon.Icon.new(icons.Icons.image), actions: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 25}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/home");
                    }, T.VoidTovoid()), child: C[1] || CT.C1}), new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/register");
                    }, T.VoidTovoid()), child: C[2] || CT.C2}), new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/login");
                    }, T.VoidTovoid()), child: C[3] || CT.C3})])})})])}), bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({currentIndex: 0, backgroundColor: new ui.Color.fromARGB(68, 180, 50, 152), items: T.JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.person), label: "Dados", backgroundColor: new ui.Color.fromARGB(0, 255, 255, 255)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.shopping_basket), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Produtos"}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.home), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Home"})]), onTap: dart.fn(index => {
            switch (index) {
              case 0:
                {
                  navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), context, "/form", {arguments: new (T.IdentityMapOfString$String()).from(["nome", this.texto])});
                  break;
                }
              case 1:
                {
                  navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/galery");
                  break;
                }
              case 2:
                {
                  navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/home");
                  break;
                }
            }
          }, T.intTovoid())}), body: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new("https://i0.wp.com/emotioncard.com.br/wp-content/uploads/2017/08/02c1b43868407cd6f7c142885eb95c46-mobile-wallpaper-wallpaper-backgrounds-1.jpg?resize=660%2C1173&ssl=1"), fit: box_fit.BoxFit.cover})}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 50, bottom: 15}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new container.Container.new({width: 130, height: 130, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png")})}), new text.Text.new("Itens : " + dart.str(this.itens), {style: new text_style.TextStyle.new({fontSize: 20})}), new basic.SizedBox.new({height: 50, width: 150, child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({bottom: 10}), child: new text_button.TextButton.new({onPressed: dart.fn(() => (() => {
                                let t0 = T.LinkedHashSetOfSetOfvoid().new();
                                if (this.itens <= 0)
                                  t0.add(T.LinkedHashSetOfvoid().from([dialog.showDialog(core.String, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: C[4] || CT.C4, content: C[5] || CT.C5, actions: T.JSArrayOfWidget().of([new text_button.TextButton.new({onPressed: dart.fn(() => navigator.Navigator.pop(core.String, context, "Cancel"), T.VoidTovoid()), child: C[6] || CT.C6})])}), T.BuildContextToAlertDialog())}), this.setState(dart.fn(() => {
                                      this.itens = 1;
                                      this.itens = this.itens - 1;
                                    }, T.VoidTovoid()))]));
                                else
                                  t0.add(T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                                      this.itens = this.itens - 1;
                                    }, T.VoidTovoid()))]));
                                return t0;
                              })(), T.VoidTovoid()), child: C[7] || CT.C7})})})])})}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 50, bottom: 30, top: 10}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new container.Container.new({width: 130, height: 130, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png")})}), new text.Text.new("Itens : " + dart.str(this.itens), {style: new text_style.TextStyle.new({fontSize: 20})}), new basic.SizedBox.new({height: 50, width: 150, child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({bottom: 10, top: 15}), child: new text_button.TextButton.new({onPressed: dart.fn(() => (() => {
                                let t1 = T.LinkedHashSetOfSetOfvoid().new();
                                if (this.itens <= 0)
                                  t1.add(T.LinkedHashSetOfvoid().from([dialog.showDialog(core.String, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: C[9] || CT.C9, content: C[10] || CT.C10, actions: T.JSArrayOfWidget().of([new text_button.TextButton.new({onPressed: dart.fn(() => navigator.Navigator.pop(core.String, context, "Cancel"), T.VoidTovoid()), child: C[6] || CT.C6})])}), T.BuildContextToAlertDialog())}), this.setState(dart.fn(() => {
                                      this.itens = 1;
                                      this.itens = this.itens - 1;
                                    }, T.VoidTovoid()))]));
                                else
                                  t1.add(T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                                      this.itens = this.itens - 1;
                                    }, T.VoidTovoid()))]));
                                return t1;
                              })(), T.VoidTovoid()), child: C[7] || CT.C7})})})])})})])}), new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 50}), child: new container.Container.new({width: 130, height: 130, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png")})})}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 50}), child: new container.Container.new({width: 130, height: 130, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("https://www.freeiconspng.com/thumbs/shoes-png/green-running-shoes-png-24.png")})})})])})])})})});
    }
    static ['_#new#tearOff']() {
      return new Products._MyGaleryState.new();
    }
  };
  (Products._MyGaleryState.new = function() {
    this.texto = Store.Store.login;
    this.loading = true;
    this.itens = 10;
    Products._MyGaleryState.__proto__.new.call(this);
    ;
  }).prototype = Products._MyGaleryState.prototype;
  dart.addTypeTests(Products._MyGaleryState);
  dart.addTypeCaches(Products._MyGaleryState);
  dart.setMethodSignature(Products._MyGaleryState, () => ({
    __proto__: dart.getMethods(Products._MyGaleryState.__proto__),
    [_loadingImageIds]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Products._MyGaleryState, I[1]);
  dart.setFieldSignature(Products._MyGaleryState, () => ({
    __proto__: dart.getFields(Products._MyGaleryState.__proto__),
    texto: dart.finalFieldType(core.String),
    loading: dart.fieldType(core.bool),
    itens: dart.fieldType(core.int)
  }));
  register.RegisterPage = class RegisterPage extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new register.RegisterPage.new({key: key});
    }
    createState() {
      return new register._RegisterPageState.new();
    }
  };
  (register.RegisterPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    register.RegisterPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = register.RegisterPage.prototype;
  dart.addTypeTests(register.RegisterPage);
  dart.addTypeCaches(register.RegisterPage);
  dart.setMethodSignature(register.RegisterPage, () => ({
    __proto__: dart.getMethods(register.RegisterPage.__proto__),
    createState: dart.fnType(framework.State$(register.RegisterPage), [])
  }));
  dart.setLibraryUri(register.RegisterPage, I[2]);
  var _Salvar = dart.privateName(register, "_Salvar");
  var _enviar = dart.privateName(register, "_enviar");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  register._RegisterPageState = class _RegisterPageState extends framework.State$(register.RegisterPage) {
    [_enviar]() {
      let valido = dart.nullCheck(this.chave.currentState).validate();
      if (!valido) {
        return;
      } else {
        this[_Salvar]();
      }
      dart.nullCheck(this.chave.currentState).save();
    }
    [_Salvar]() {
      navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), this.context, "/form", {arguments: new (T.IdentityMapOfString$String()).from(["nome", this.ControlerTeste.value.text])});
    }
    build(context) {
      let style = text_button.TextButton.styleFrom({primary: theme.Theme.of(context).colorScheme.onPrimary});
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Register"), leading: new icon.Icon.new(icons.Icons.app_registration), actions: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 25}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/");
                    }, T.VoidTovoid()), child: C[3] || CT.C3})])})})])}), body: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.RadialGradient.new({colors: T.JSArrayOfColor().of([new ui.Color.new(4278190080), new ui.Color.new(4278736789)]), center: alignment.Alignment.center, radius: 0.8})}), child: new basic.Padding.new({padding: C[11] || CT.C11, child: new form.Form.new({key: this.chave, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("RegisterPage ", {style: new text_style.TextStyle.new({fontSize: 24, fontWeight: ui.FontWeight.bold})}), new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.width * 0.06}), new text_form_field.TextFormField.new({controller: this.ControlerTeste, decoration: new input_decorator.InputDecoration.new({labelText: "Email/Login", border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)}), icon: new icon.Icon.new(icons.Icons.login, {color: new ui.Color.fromARGB(255, 159, 161, 167)}), fillColor: colors.Colors.black, filled: true}), keyboardType: text_input.TextInputType.emailAddress, onFieldSubmitted: dart.fn(value => {
                    }, T.StringTovoid()), validator: dart.fn(value => {
                      if (dart.nullCheck(value)[$isEmpty] || !core.RegExp.new("^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\\.[a-zA-Z]+").hasMatch(value)) {
                        return "Enter a valid email!";
                      }
                      return null;
                    }, T.StringNToStringN())}), new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.width * 0.06}), new text_form_field.TextFormField.new({decoration: new input_decorator.InputDecoration.new({labelText: "Name", border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)}), icon: new icon.Icon.new(icons.Icons.login, {color: new ui.Color.fromARGB(255, 159, 161, 167)}), fillColor: colors.Colors.black, filled: true}), keyboardType: text_input.TextInputType.name_, onFieldSubmitted: dart.fn(value => {
                    }, T.StringTovoid()), validator: dart.fn(value => {
                      if (dart.nullCheck(value)[$isEmpty] || !core.RegExp.new("^[a-zA-Z]").hasMatch(value)) {
                        return "Enter your name";
                      }
                      return null;
                    }, T.StringNToStringN())}), new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.width * 0.06}), new text_form_field.TextFormField.new({decoration: new input_decorator.InputDecoration.new({labelText: "Password", border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)}), icon: new icon.Icon.new(icons.Icons.lock, {color: new ui.Color.new(4280436119)}), fillColor: colors.Colors.black, filled: true}), keyboardType: text_input.TextInputType.emailAddress, onFieldSubmitted: dart.fn(value => {
                    }, T.StringTovoid()), obscureText: true, validator: dart.fn(value => {
                      if (dart.nullCheck(value)[$isEmpty] || value.length < 5) {
                        return "Enter a valid password!";
                      }
                      return null;
                    }, T.StringNToStringN())}), new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.width * 0.06}), new container.Container.new({width: 140, height: 50, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColor().of([new ui.Color.fromARGB(140, 59, 51, 180), new ui.Color.fromARGB(139, 228, 81, 208), new ui.Color.fromARGB(140, 87, 28, 99)]), begin: fractional_offset.FractionalOffset.centerLeft, end: fractional_offset.FractionalOffset.centerRight})}), child: new text_button.TextButton.new({style: text_button.TextButton.styleFrom({primary: colors.Colors.white, shadowColor: new ui.Color.fromARGB(255, 255, 255, 255), elevation: 5}), child: new text.Text.new("Enter", {style: new text_style.TextStyle.new({fontSize: 24})}), onPressed: dart.fn(() => this[_enviar](), T.VoidTovoid())})})])})})})})});
    }
    static ['_#new#tearOff']() {
      return new register._RegisterPageState.new();
    }
  };
  (register._RegisterPageState.new = function() {
    this.chave = T.GlobalKeyOfFormState().new();
    this.isLoading = false;
    this.ControlerTeste = new editable_text.TextEditingController.new();
    register._RegisterPageState.__proto__.new.call(this);
    ;
  }).prototype = register._RegisterPageState.prototype;
  dart.addTypeTests(register._RegisterPageState);
  dart.addTypeCaches(register._RegisterPageState);
  dart.setMethodSignature(register._RegisterPageState, () => ({
    __proto__: dart.getMethods(register._RegisterPageState.__proto__),
    [_enviar]: dart.fnType(dart.void, []),
    [_Salvar]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(register._RegisterPageState, I[2]);
  dart.setFieldSignature(register._RegisterPageState, () => ({
    __proto__: dart.getFields(register._RegisterPageState.__proto__),
    chave: dart.fieldType(framework.GlobalKey$(form.FormState)),
    isLoading: dart.fieldType(core.bool),
    ControlerTeste: dart.finalFieldType(editable_text.TextEditingController)
  }));
  Login.LoginPage = class LoginPage extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Login.LoginPage.new({key: key});
    }
    createState() {
      return new Login._LoginPageState.new();
    }
  };
  (Login.LoginPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Login.LoginPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Login.LoginPage.prototype;
  dart.addTypeTests(Login.LoginPage);
  dart.addTypeCaches(Login.LoginPage);
  dart.setMethodSignature(Login.LoginPage, () => ({
    __proto__: dart.getMethods(Login.LoginPage.__proto__),
    createState: dart.fnType(framework.State$(Login.LoginPage), [])
  }));
  dart.setLibraryUri(Login.LoginPage, I[3]);
  var _Salvar$ = dart.privateName(Login, "_Salvar");
  var _enviar$ = dart.privateName(Login, "_enviar");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  Login._LoginPageState = class _LoginPageState extends framework.State$(Login.LoginPage) {
    [_enviar$]() {
      let valido = dart.nullCheck(this.chave.currentState).validate();
      if (!valido) {
        return;
      } else {
        if (this.ControlerTeste.value.text === this.texto) {
          this[_Salvar$]();
        } else
          core.print("error");
      }
      dart.nullCheck(this.chave.currentState).save();
    }
    [_Salvar$]() {
      navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), this.context, "/form", {arguments: new (T.IdentityMapOfString$String()).from(["nome", this.ControlerTeste.value.text])});
    }
    build(context) {
      let style = text_button.TextButton.styleFrom({primary: theme.Theme.of(context).colorScheme.onPrimary});
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Login"), leading: new icon.Icon.new(icons.Icons.login), actions: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 25}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/register");
                    }, T.VoidTovoid()), child: C[2] || CT.C2})])})})])}), body: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.RadialGradient.new({colors: T.JSArrayOfColor().of([new ui.Color.new(4278190080), new ui.Color.new(4278736789)]), center: alignment.Alignment.center, radius: 0.8})}), child: new basic.Padding.new({padding: C[11] || CT.C11, child: new form.Form.new({key: this.chave, child: new basic.Column.new({children: T.JSArrayOfWidget().of([new container.Container.new({width: 130, height: 130, child: new image.Image.network("https://cdn-icons-png.flaticon.com/512/5087/5087579.png", {fit: box_fit.BoxFit.fill})}), new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.width * 0.01}), new text_form_field.TextFormField.new({controller: this.ControlerTeste, decoration: new input_decorator.InputDecoration.new({labelText: "Email/Login", focusedBorder: new input_border.OutlineInputBorder.new({borderSide: C[12] || CT.C12, borderRadius: new border_radius.BorderRadius.circular(10)}), border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)}), icon: new icon.Icon.new(icons.Icons.email, {color: new ui.Color.fromARGB(255, 159, 161, 167)}), fillColor: colors.Colors.transparent, filled: true}), keyboardType: text_input.TextInputType.emailAddress, onFieldSubmitted: dart.fn(value => {
                    }, T.StringTovoid()), validator: dart.fn(value => {
                      if (dart.nullCheck(value)[$isEmpty] || !core.RegExp.new("^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\\.[a-zA-Z]+").hasMatch(value)) {
                        return "Enter a valid email!";
                      } else if (this.ControlerTeste.value.text !== this.texto) return "Email invalid";
                      return null;
                    }, T.StringNToStringN())}), new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.width * 0.1}), new text_form_field.TextFormField.new({decoration: new input_decorator.InputDecoration.new({labelText: "Password", focusedBorder: new input_border.OutlineInputBorder.new({borderSide: C[12] || CT.C12, borderRadius: new border_radius.BorderRadius.circular(10)}), border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)}), icon: new icon.Icon.new(icons.Icons.lock, {color: new ui.Color.fromARGB(255, 159, 161, 167)}), fillColor: colors.Colors.transparent, filled: true, suffixIcon: new gesture_detector.GestureDetector.new({child: new icon.Icon.new(this.exibir === false ? icons.Icons.visibility_off : icons.Icons.visibility, {color: new ui.Color.fromARGB(255, 159, 161, 167)}), onTap: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                            this.exibir = !this.exibir;
                          }, T.VoidTovoid()))]), T.VoidTovoid())})}), keyboardType: text_input.TextInputType.emailAddress, onFieldSubmitted: dart.fn(value => {
                    }, T.StringTovoid()), obscureText: this.exibir === false ? true : false, validator: dart.fn(value => {
                      if (dart.nullCheck(value)[$isEmpty] || value.length < 6 || !core.RegExp.new("^[a-zA-Z0-9]+[0-9]").hasMatch(value)) {
                        return "Enter a valid password!";
                      }
                      return null;
                    }, T.StringNToStringN())}), new basic.SizedBox.new({height: media_query.MediaQuery.of(context).size.width * 0.1}), new container.Container.new({width: 160, height: 50, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.transparent}), child: new text_button.TextButton.new({style: text_button.TextButton.styleFrom({side: new borders.BorderSide.new({width: 1, color: colors.Colors.white}), primary: colors.Colors.white, shadowColor: new ui.Color.fromARGB(255, 255, 255, 255), elevation: 20, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(20)})}), child: new text.Text.new("Enter", {style: new text_style.TextStyle.new({fontSize: 24})}), onPressed: dart.fn(() => this[_enviar$](), T.VoidTovoid())})})])})})})})});
    }
    static ['_#new#tearOff']() {
      return new Login._LoginPageState.new();
    }
  };
  (Login._LoginPageState.new = function() {
    this.chave = T.GlobalKeyOfFormState().new();
    this.isLoading = false;
    this.texto = Store.Store.login;
    this.ControlerTeste = new editable_text.TextEditingController.new();
    this.exibir = false;
    Login._LoginPageState.__proto__.new.call(this);
    ;
  }).prototype = Login._LoginPageState.prototype;
  dart.addTypeTests(Login._LoginPageState);
  dart.addTypeCaches(Login._LoginPageState);
  dart.setMethodSignature(Login._LoginPageState, () => ({
    __proto__: dart.getMethods(Login._LoginPageState.__proto__),
    [_enviar$]: dart.fnType(dart.void, []),
    [_Salvar$]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Login._LoginPageState, I[3]);
  dart.setFieldSignature(Login._LoginPageState, () => ({
    __proto__: dart.getFields(Login._LoginPageState.__proto__),
    chave: dart.fieldType(framework.GlobalKey$(form.FormState)),
    isLoading: dart.fieldType(core.bool),
    texto: dart.finalFieldType(core.String),
    ControlerTeste: dart.finalFieldType(editable_text.TextEditingController),
    exibir: dart.fieldType(core.bool)
  }));
  var isLight = dart.privateName(App, "AppController.isLight");
  App.AppController = class AppController extends change_notifier.ChangeNotifier {
    get isLight() {
      return this[isLight];
    }
    set isLight(value) {
      this[isLight] = value;
    }
    changeTheme() {
      this.isLight = !this.isLight;
      this.notifyListeners();
    }
    static ['_#new#tearOff']() {
      return new App.AppController.new();
    }
  };
  (App.AppController.new = function() {
    this[isLight] = false;
    App.AppController.__proto__.new.call(this);
    ;
  }).prototype = App.AppController.prototype;
  dart.addTypeTests(App.AppController);
  dart.addTypeCaches(App.AppController);
  dart.setMethodSignature(App.AppController, () => ({
    __proto__: dart.getMethods(App.AppController.__proto__),
    changeTheme: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(App.AppController, I[4]);
  dart.setFieldSignature(App.AppController, () => ({
    __proto__: dart.getFields(App.AppController.__proto__),
    isLight: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(App.AppController, () => ['instance']);
  dart.defineLazy(App.AppController, {
    /*App.AppController.instance*/get instance() {
      return new App.AppController.new();
    },
    set instance(_) {}
  }, false);
  Loading.LoadingPage = class LoadingPage extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Loading.LoadingPage.new({key: key});
    }
    createState() {
      return new Loading._LoadingPageState.new();
    }
  };
  (Loading.LoadingPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Loading.LoadingPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Loading.LoadingPage.prototype;
  dart.addTypeTests(Loading.LoadingPage);
  dart.addTypeCaches(Loading.LoadingPage);
  dart.setMethodSignature(Loading.LoadingPage, () => ({
    __proto__: dart.getMethods(Loading.LoadingPage.__proto__),
    createState: dart.fnType(framework.State$(Loading.LoadingPage), [])
  }));
  dart.setLibraryUri(Loading.LoadingPage, I[5]);
  Loading._LoadingPageState = class _LoadingPageState extends framework.State$(Loading.LoadingPage) {
    Timer() {
      navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), this.context, "/");
    }
    build(context) {
      T.FutureOfNull().delayed(new core.Duration.new({milliseconds: 1000}), dart.fn(() => {
        this.Timer();
      }, T.VoidToNull()));
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.blue._get(900), body: new basic.Center.new({child: new cube_grid.SpinKitCubeGrid.new({color: colors.Colors.white, size: 90})})});
    }
    static ['_#new#tearOff']() {
      return new Loading._LoadingPageState.new();
    }
  };
  (Loading._LoadingPageState.new = function() {
    Loading._LoadingPageState.__proto__.new.call(this);
    ;
  }).prototype = Loading._LoadingPageState.prototype;
  dart.addTypeTests(Loading._LoadingPageState);
  dart.addTypeCaches(Loading._LoadingPageState);
  dart.setMethodSignature(Loading._LoadingPageState, () => ({
    __proto__: dart.getMethods(Loading._LoadingPageState.__proto__),
    Timer: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Loading._LoadingPageState, I[5]);
  Form.FormPage = class FormPage extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new Form.FormPage.new({key: key});
    }
    createState() {
      return new Form.FormPageState.new();
    }
  };
  (Form.FormPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    Form.FormPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = Form.FormPage.prototype;
  dart.addTypeTests(Form.FormPage);
  dart.addTypeCaches(Form.FormPage);
  dart.setMethodSignature(Form.FormPage, () => ({
    __proto__: dart.getMethods(Form.FormPage.__proto__),
    createState: dart.fnType(Form.FormPageState, [])
  }));
  dart.setLibraryUri(Form.FormPage, I[6]);
  Form.FormPageState = class FormPageState extends framework.State$(Form.FormPage) {
    build(context) {
      let data = new _js_helper.LinkedMap.new();
      data = core.Map.as(dart.nullCheck(routes.ModalRoute.of(T.ObjectN(), context)).settings.arguments);
      let nome = core.String.as(data[$_get]("nome"));
      let style = text_button.TextButton.styleFrom({primary: theme.Theme.of(context).colorScheme.onPrimary});
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("User"), leading: new icon.Icon.new(icons.Icons.login), actions: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 25}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/register");
                    }, T.VoidTovoid()), child: C[2] || CT.C2})])})})])}), bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({currentIndex: 0, backgroundColor: new ui.Color.fromARGB(68, 180, 50, 152), items: T.JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.person), label: "Dados", backgroundColor: new ui.Color.fromARGB(0, 255, 255, 255)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.shopping_basket), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Produtos"}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.home), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Home"})]), onTap: dart.fn(index => {
            switch (index) {
              case 0:
                {
                  navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/form");
                  break;
                }
              case 1:
                {
                  navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/galery");
                  break;
                }
              case 2:
                {
                  navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/home");
                  break;
                }
            }
          }, T.intTovoid())}), body: new basic.SizedBox.new({width: 1 / 0, height: 1 / 0, child: new basic.Padding.new({padding: C[15] || CT.C15, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new text.Text.new("Bem vindo"), new text.Text.new(nome, {style: new text_style.TextStyle.new({fontSize: 30, color: colors.Colors.white})})])})})})});
    }
    static ['_#new#tearOff']() {
      return new Form.FormPageState.new();
    }
  };
  (Form.FormPageState.new = function() {
    Form.FormPageState.__proto__.new.call(this);
    ;
  }).prototype = Form.FormPageState.prototype;
  dart.addTypeTests(Form.FormPageState);
  dart.addTypeCaches(Form.FormPageState);
  dart.setMethodSignature(Form.FormPageState, () => ({
    __proto__: dart.getMethods(Form.FormPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(Form.FormPageState, I[6]);
  Store.Store = class Store$ extends core.Object {
    static ['_#new#tearOff']() {
      return new Store.Store.new();
    }
  };
  (Store.Store.new = function() {
    ;
  }).prototype = Store.Store.prototype;
  dart.addTypeTests(Store.Store);
  dart.addTypeCaches(Store.Store);
  dart.setLibraryUri(Store.Store, I[7]);
  dart.setStaticFieldSignature(Store.Store, () => ['login', 'pass']);
  dart.defineLazy(Store.Store, {
    /*Store.Store.login*/get login() {
      return "LucasVidotto@gmail.com";
    },
    set login(_) {},
    /*Store.Store.pass*/get pass() {
      return "abc123";
    },
    set pass(_) {}
  }, false);
  Store.Products = class Products extends core.Object {
    static ['_#new#tearOff']() {
      return new Store.Products.new();
    }
  };
  (Store.Products.new = function() {
    ;
  }).prototype = Store.Products.prototype;
  dart.addTypeTests(Store.Products);
  dart.addTypeCaches(Store.Products);
  dart.setLibraryUri(Store.Products, I[7]);
  dart.setStaticFieldSignature(Store.Products, () => ['mizuno', 'nike', 'w']);
  dart.defineLazy(Store.Products, {
    /*Store.Products.mizuno*/get mizuno() {
      return T.JSArrayOfString().of(["01", "MIZUNO", "399.99", "https://freepngdownload.com/image/thumb/running-shoes-png-free-download-42.png"]);
    },
    set mizuno(_) {},
    /*Store.Products.nike*/get nike() {
      return T.JSArrayOfString().of(["02", "NIKE SPORT", "299.99", "https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png"]);
    },
    set nike(_) {},
    /*Store.Products.w*/get w() {
      return T.JSArrayOfString().of(["03", "W3 SPORT", "249.00"]);
    },
    set w(_) {}
  }, false);
  list.List = class List extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new list.List.new({key: key});
    }
    createState() {
      return new list._ListState.new();
    }
  };
  (list.List.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    list.List.__proto__.new.call(this, {key: key});
    ;
  }).prototype = list.List.prototype;
  dart.addTypeTests(list.List);
  dart.addTypeCaches(list.List);
  dart.setMethodSignature(list.List, () => ({
    __proto__: dart.getMethods(list.List.__proto__),
    createState: dart.fnType(framework.State$(list.List), [])
  }));
  dart.setLibraryUri(list.List, I[8]);
  var _Enviar = dart.privateName(list, "_Enviar");
  list._ListState = class _ListState extends framework.State$(list.List) {
    [_Enviar]() {
      navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), this.context, "/info", {arguments: new (T.IdentityMapOfString$String()).from(["nome", this.codigo])});
    }
    build(context) {
      let style = text_button.TextButton.styleFrom({primary: theme.Theme.of(context).colorScheme.onPrimary});
      let _buttonText = "Click";
      let intens = 10;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("List"), leading: new icon.Icon.new(icons.Icons.image), actions: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 25}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/home");
                    }, T.VoidTovoid()), child: C[1] || CT.C1}), new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/register");
                    }, T.VoidTovoid()), child: C[2] || CT.C2}), new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/login");
                    }, T.VoidTovoid()), child: C[3] || CT.C3})])})})])}), bottomNavigationBar: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({colors: T.JSArrayOfColor().of([new ui.Color.fromARGB(255, 117, 115, 115), new ui.Color.fromARGB(255, 63, 62, 61)]), begin: alignment.Alignment.topLeft, end: alignment.Alignment.topRight, stops: T.JSArrayOfdouble().of([0, 0.8]), tileMode: ui.TileMode.clamp})}), child: new bottom_navigation_bar.BottomNavigationBar.new({currentIndex: 0, backgroundColor: colors.Colors.transparent, items: T.JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.person), label: "Dados", backgroundColor: new ui.Color.fromARGB(0, 255, 255, 255)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.shopping_basket), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Produtos"}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.home), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Home"})]), onTap: dart.fn(index => {
              switch (index) {
                case 0:
                  {
                    navigator.Navigator.pushReplacementNamed(T.ObjectN(), T.ObjectN(), context, "/form", {arguments: new (T.IdentityMapOfString$String()).from(["nome", this.texto])});
                    break;
                  }
                case 1:
                  {
                    navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/galery");
                    break;
                  }
                case 2:
                  {
                    navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/home");
                    break;
                  }
              }
            }, T.intTovoid())})}), body: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.RadialGradient.new({colors: T.JSArrayOfColor().of([new ui.Color.fromARGB(255, 252, 249, 249), new ui.Color.fromARGB(255, 202, 199, 199)]), center: alignment.Alignment.bottomLeft, radius: 0.8})}), child: new scroll_view.ListView.new({children: T.JSArrayOfWidget().of([new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 35, bottom: 30, top: 10}), child: new container.Container.new({width: 135, height: 161, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black.withOpacity(0.3), border: box_border.Border.all({color: colors.Colors.black.withOpacity(0.3)}), borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10))}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("NIKE SPORT", {style: new text_style.TextStyle.new({color: colors.Colors.black})}), new container.Container.new({width: 100, height: 100, child: new transitions.RotationTransition.new({turns: new (T.AlwaysStoppedAnimationOfdouble()).new(20 / 360), child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png")})})}), new container.Container.new({width: 100, height: 40, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.black}), child: new text_button.TextButton.new({onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                                  this.codigo = "nike";
                                }, T.VoidTovoid())), this[_Enviar]()]), T.VoidTovoid()), style: text_button.TextButton.styleFrom({primary: colors.Colors.white, shadowColor: new ui.Color.fromARGB(255, 255, 255, 255), elevation: 5}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([C[16] || CT.C16, new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 4}), child: new text.Text.new("More Info", {style: new text_style.TextStyle.new({fontSize: 13})})})])})})})])})})}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 40, bottom: 30, top: 10}), child: new container.Container.new({width: 135, height: 161, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black.withOpacity(0.3), border: box_border.Border.all({color: colors.Colors.black.withOpacity(0.3)}), borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10))}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("W3 SPORT", {style: new text_style.TextStyle.new({color: colors.Colors.black})}), new container.Container.new({width: 100, height: 100, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png")})}), new container.Container.new({width: 100, height: 40, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.black}), child: new text_button.TextButton.new({onPressed: dart.fn(() => new _js_helper.LinkedMap.new(), T.VoidTovoid()), style: text_button.TextButton.styleFrom({primary: colors.Colors.white, shadowColor: new ui.Color.fromARGB(255, 255, 255, 255), elevation: 5}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([C[18] || CT.C18, new text.Text.new("More Info", {style: new text_style.TextStyle.new({fontSize: 13})})])})})})])})})})])}), new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 35, bottom: 30, top: 10}), child: new container.Container.new({width: 135, height: 161, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black.withOpacity(0.3), border: box_border.Border.all({color: colors.Colors.black.withOpacity(0.3)}), borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10))}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("Shoes ???", {style: new text_style.TextStyle.new({color: colors.Colors.black})}), new container.Container.new({width: 100, height: 100, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png")})}), new container.Container.new({width: 100, height: 40, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.black}), child: new text_button.TextButton.new({onPressed: dart.fn(() => new _js_helper.LinkedMap.new(), T.VoidTovoid()), style: text_button.TextButton.styleFrom({primary: colors.Colors.white, shadowColor: new ui.Color.fromARGB(255, 255, 255, 255), elevation: 5}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([C[18] || CT.C18, new text.Text.new("More Info", {style: new text_style.TextStyle.new({fontSize: 13})})])})})})])})})}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 40, bottom: 30, top: 10}), child: new container.Container.new({width: 135, height: 161, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black.withOpacity(0.3), border: box_border.Border.all({color: colors.Colors.black.withOpacity(0.3)}), borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10))}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("MIZUNO", {style: new text_style.TextStyle.new({color: colors.Colors.black})}), new container.Container.new({width: 100, height: 100, child: new transitions.RotationTransition.new({turns: new (T.AlwaysStoppedAnimationOfdouble()).new(-20 / 360), child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("https://freepngdownload.com/image/thumb/running-shoes-png-free-download-42.png")})})}), new container.Container.new({width: 100, height: 40, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.black}), child: new text_button.TextButton.new({onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                                  this.codigo = "mizuno";
                                }, T.VoidTovoid())), this[_Enviar]()]), T.VoidTovoid()), style: text_button.TextButton.styleFrom({primary: colors.Colors.white, shadowColor: new ui.Color.fromARGB(255, 255, 255, 255), elevation: 5}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([C[18] || CT.C18, new text.Text.new("More Info", {style: new text_style.TextStyle.new({fontSize: 13})})])})})})])})})})])}), new basic.Row.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 35, bottom: 30, top: 10}), child: new container.Container.new({width: 135, height: 161, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black.withOpacity(0.3), border: box_border.Border.all({color: colors.Colors.black.withOpacity(0.3)}), borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10))}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("NIKE RUN", {style: new text_style.TextStyle.new({color: colors.Colors.black})}), new container.Container.new({width: 100, height: 100, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Transparent.png")})}), new container.Container.new({width: 100, height: 40, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.black}), child: new text_button.TextButton.new({onPressed: dart.fn(() => new _js_helper.LinkedMap.new(), T.VoidTovoid()), style: text_button.TextButton.styleFrom({primary: colors.Colors.white, shadowColor: new ui.Color.fromARGB(255, 255, 255, 255), elevation: 5}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([C[18] || CT.C18, new text.Text.new("More Info", {style: new text_style.TextStyle.new({fontSize: 13})})])})})})])})})}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 40, bottom: 30, top: 10}), child: new container.Container.new({width: 135, height: 161, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.black.withOpacity(0.3), border: box_border.Border.all({color: colors.Colors.black.withOpacity(0.3)}), borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10))}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("ADIDAS SPEED", {style: new text_style.TextStyle.new({color: colors.Colors.black})}), new container.Container.new({width: 100, height: 100, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png")})}), new container.Container.new({width: 100, height: 40, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10), color: colors.Colors.black}), child: new text_button.TextButton.new({onPressed: dart.fn(() => T.LinkedHashSetOfFutureOfObjectN().from([navigator.Navigator.pushNamed(T.ObjectN(), context, "/info")]), T.VoidTovoid()), style: text_button.TextButton.styleFrom({primary: colors.Colors.white, shadowColor: new ui.Color.fromARGB(255, 255, 255, 255), elevation: 5}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([C[18] || CT.C18, new text.Text.new("More Info", {style: new text_style.TextStyle.new({fontSize: 13})})])})})})])})})})])})])})})});
    }
    static ['_#new#tearOff']() {
      return new list._ListState.new();
    }
  };
  (list._ListState.new = function() {
    this.texto = Store.Store.login;
    this.loading = true;
    this.itens = 10;
    this.codigo = "not";
    list._ListState.__proto__.new.call(this);
    ;
  }).prototype = list._ListState.prototype;
  dart.addTypeTests(list._ListState);
  dart.addTypeCaches(list._ListState);
  dart.setMethodSignature(list._ListState, () => ({
    __proto__: dart.getMethods(list._ListState.__proto__),
    [_Enviar]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(list._ListState, I[8]);
  dart.setFieldSignature(list._ListState, () => ({
    __proto__: dart.getFields(list._ListState.__proto__),
    texto: dart.finalFieldType(core.String),
    loading: dart.fieldType(core.bool),
    itens: dart.fieldType(core.int),
    codigo: dart.fieldType(core.String)
  }));
  info.Info = class Info extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new info.Info.new({key: key});
    }
    createState() {
      return new info._InfoState.new();
    }
  };
  (info.Info.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    info.Info.__proto__.new.call(this, {key: key});
    ;
  }).prototype = info.Info.prototype;
  dart.addTypeTests(info.Info);
  dart.addTypeCaches(info.Info);
  dart.setMethodSignature(info.Info, () => ({
    __proto__: dart.getMethods(info.Info.__proto__),
    createState: dart.fnType(framework.State$(info.Info), [])
  }));
  dart.setLibraryUri(info.Info, I[9]);
  info._InfoState = class _InfoState extends framework.State$(info.Info) {
    build(context) {
      let data = new _js_helper.LinkedMap.new();
      data = core.Map.as(dart.nullCheck(routes.ModalRoute.of(T.ObjectN(), context)).settings.arguments);
      let nome = core.String.as(data[$_get]("nome"));
      if (nome === "nike")
        this.teste = this.nike;
      else if (nome === "mizuno") this.teste = this.mizu;
      let style = text_button.TextButton.styleFrom({primary: theme.Theme.of(context).colorScheme.onPrimary});
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Galeri"), leading: new icon.Icon.new(icons.Icons.image), actions: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 25}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/home");
                    }, T.VoidTovoid()), child: C[1] || CT.C1}), new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/register");
                    }, T.VoidTovoid()), child: C[2] || CT.C2}), new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/login");
                    }, T.VoidTovoid()), child: C[3] || CT.C3})])})})])}), bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({currentIndex: 0, backgroundColor: new ui.Color.fromARGB(68, 180, 50, 152), items: T.JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.person), label: "Dados", backgroundColor: new ui.Color.fromARGB(0, 255, 255, 255)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.shopping_basket), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Produtos"}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.home), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Home"})])}), body: new container.Container.new({width: media_query.MediaQuery.of(context).size.width, height: media_query.MediaQuery.of(context).size.height, decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.RadialGradient.new({colors: T.JSArrayOfColor().of([new ui.Color.new(4281216558), new ui.Color.fromARGB(255, 122, 117, 117), new ui.Color.new(4294967295)]), center: alignment.Alignment.topRight, radius: 0.8})}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new(this.teste[$_get](1)), new container.Container.new({width: 170, height: 170, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network(this.teste[$_get](3))})}), new basic.SizedBox.new({height: 20}), new basic.Padding.new({padding: C[19] || CT.C19, child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text.Text.new("Pre??o : " + this.teste[$_get](2), {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20, shadows: T.JSArrayOfShadow().of([new ui.Shadow.new({blurRadius: 10, color: colors.Colors.black, offset: new ui.Offset.new(5, 5)})])})}), new basic.Padding.new({padding: C[20] || CT.C20, child: new container.Container.new({width: 35, height: 35, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(50), color: new ui.Color.fromARGB(255, 65, 62, 62)}), child: new text_button.TextButton.new({child: new text.Text.new(this.medidas === false ? "US" : "BR", {style: new text_style.TextStyle.new({fontSize: 10, color: colors.Colors.white})}), onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              this.medidas = !this.medidas;
                            }, T.VoidTovoid()))]), T.VoidTovoid())})})})])})}), new basic.Padding.new({padding: C[19] || CT.C19, child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text.Text.new("Tamanhos : ", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20})}), new basic.Padding.new({padding: C[21] || CT.C21, child: new container.Container.new({width: 35, height: 35, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(50), color: this.status === true ? colors.Colors.green : new ui.Color.fromARGB(255, 65, 62, 62)}), child: new text_button.TextButton.new({child: new text.Text.new(this.medidas === false ? "39" : "7.5", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              this.status = !this.status;
                            }, T.VoidTovoid()))]), T.VoidTovoid())})})}), new basic.Padding.new({padding: C[22] || CT.C22, child: new container.Container.new({width: 35, height: 35, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(50), color: this.status === true ? colors.Colors.green : new ui.Color.fromARGB(255, 65, 62, 62)}), child: new text_button.TextButton.new({child: new text.Text.new(this.medidas === false ? "40" : "8.5", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              this.status = !this.status;
                            }, T.VoidTovoid()))]), T.VoidTovoid())})})}), new basic.Padding.new({padding: C[22] || CT.C22, child: new container.Container.new({width: 35, height: 35, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(50), color: this.status === true ? colors.Colors.green : new ui.Color.fromARGB(255, 65, 62, 62)}), child: new text_button.TextButton.new({child: new text.Text.new(this.medidas === false ? "41" : "9.5", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              this.status = !this.status;
                            }, T.VoidTovoid()))]), T.VoidTovoid())})})}), new basic.Padding.new({padding: C[22] || CT.C22, child: new container.Container.new({width: 35, height: 35, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(50), color: this.status === true ? colors.Colors.green : new ui.Color.fromARGB(255, 65, 62, 62)}), child: new text_button.TextButton.new({child: new text.Text.new(this.medidas === false ? "42" : "10", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              this.status = !this.status;
                            }, T.VoidTovoid()))]), T.VoidTovoid())})})}), new basic.Padding.new({padding: C[22] || CT.C22, child: new container.Container.new({width: 35, height: 35, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(50), color: this.status === true ? colors.Colors.green : new ui.Color.fromARGB(255, 65, 62, 62)}), child: new text_button.TextButton.new({child: new text.Text.new(this.medidas === false ? "43" : "11", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              this.status = !this.status;
                            }, T.VoidTovoid()))]), T.VoidTovoid())})})})])})}), new basic.Padding.new({padding: C[23] || CT.C23, child: new basic.Align.new({alignment: alignment.AlignmentDirectional.center, child: new container.Container.new({width: 100, height: 50, alignment: alignment.AlignmentDirectional.center, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(30), color: new ui.Color.fromARGB(255, 56, 54, 54)}), child: new text_button.TextButton.new({child: new text.Text.new("Add cart", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), onPressed: dart.fn(() => T.LinkedHashSetOfString().from([navigator.Navigator.restorablePushNamed(T.ObjectN(), context, "/cart")]), T.VoidTovoid())})})})})])})})});
    }
    static ['_#new#tearOff']() {
      return new info._InfoState.new();
    }
  };
  (info._InfoState.new = function() {
    this.texto = Store.Store.login;
    this.nike = Store.Products.nike;
    this.mizu = Store.Products.mizuno;
    this.medidas = false;
    this.status = false;
    this.teste = T.JSArrayOfString().of([]);
    this.loading = true;
    this.itens = 10;
    info._InfoState.__proto__.new.call(this);
    ;
  }).prototype = info._InfoState.prototype;
  dart.addTypeTests(info._InfoState);
  dart.addTypeCaches(info._InfoState);
  dart.setMethodSignature(info._InfoState, () => ({
    __proto__: dart.getMethods(info._InfoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(info._InfoState, I[9]);
  dart.setFieldSignature(info._InfoState, () => ({
    __proto__: dart.getFields(info._InfoState.__proto__),
    texto: dart.finalFieldType(core.String),
    nike: dart.finalFieldType(core.List$(core.String)),
    mizu: dart.finalFieldType(core.List$(core.String)),
    medidas: dart.fieldType(core.bool),
    status: dart.fieldType(core.bool),
    teste: dart.fieldType(core.List$(core.String)),
    loading: dart.fieldType(core.bool),
    itens: dart.fieldType(core.int)
  }));
  cart.Cart = class Cart extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new cart.Cart.new({key: key});
    }
    createState() {
      return new cart._CartState.new();
    }
  };
  (cart.Cart.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    cart.Cart.__proto__.new.call(this, {key: key});
    ;
  }).prototype = cart.Cart.prototype;
  dart.addTypeTests(cart.Cart);
  dart.addTypeCaches(cart.Cart);
  dart.setMethodSignature(cart.Cart, () => ({
    __proto__: dart.getMethods(cart.Cart.__proto__),
    createState: dart.fnType(framework.State$(cart.Cart), [])
  }));
  dart.setLibraryUri(cart.Cart, I[10]);
  var _loadingImageIds$ = dart.privateName(cart, "_loadingImageIds");
  cart._CartState = class _CartState extends framework.State$(cart.Cart) {
    [_loadingImageIds$]() {
    }
    build(context) {
      let style = text_button.TextButton.styleFrom({primary: theme.Theme.of(context).colorScheme.onPrimary});
      let _buttonText = "Click";
      let intens = 10;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Cart"), leading: new icon.Icon.new(icons.Icons.image), actions: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 25}), child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/home");
                    }, T.VoidTovoid()), child: C[1] || CT.C1}), new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/register");
                    }, T.VoidTovoid()), child: C[2] || CT.C2}), new text_button.TextButton.new({style: style, onPressed: dart.fn(() => {
                      navigator.Navigator.of(context).pushNamed(T.ObjectN(), "/login");
                    }, T.VoidTovoid()), child: C[3] || CT.C3})])})})])}), bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({currentIndex: 0, backgroundColor: new ui.Color.fromARGB(68, 180, 50, 152), items: T.JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.person), label: "Dados", backgroundColor: new ui.Color.fromARGB(0, 255, 255, 255)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.shopping_basket), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Produtos"}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(icons.Icons.home), backgroundColor: colors.Colors.white.withOpacity(0.1), label: "Home"})])}), body: new container.Container.new({width: media_query.MediaQuery.of(context).size.width, height: media_query.MediaQuery.of(context).size.height, decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.RadialGradient.new({colors: T.JSArrayOfColor().of([new ui.Color.new(4281216558), new ui.Color.fromARGB(255, 122, 117, 117), new ui.Color.new(4294967295)]), center: alignment.Alignment.topRight, radius: 0.8})}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("description"), new container.Container.new({width: 170, height: 170, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20), child: new image.Image.network("")})}), new basic.SizedBox.new({height: 20}), new basic.Padding.new({padding: C[19] || CT.C19, child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text.Text.new("Total : {price * quanti}", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 20, shadows: T.JSArrayOfShadow().of([new ui.Shadow.new({blurRadius: 10, color: colors.Colors.black, offset: new ui.Offset.new(5, 5)})])})})])})}), new basic.Padding.new({padding: C[21] || CT.C21, child: new basic.Row.new({children: T.JSArrayOfWidget().of([new text.Text.new("QUANTITY : " + dart.str(this.quanti), {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 17})}), new basic.Padding.new({padding: C[24] || CT.C24, child: new container.Container.new({width: 30, height: 30, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(20), color: colors.Colors.black}), child: new text_button.TextButton.new({child: new basic.Center.new({child: C[25] || CT.C25}), onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              this.quanti = this.quanti + 1;
                            }, T.VoidTovoid()))]), T.VoidTovoid())})})}), new container.Container.new({width: 30, height: 30, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(20), color: colors.Colors.black}), child: new text_button.TextButton.new({child: C[7] || CT.C7, onPressed: dart.fn(() => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                            if (this.quanti === 0) this.quanti = 1;
                            this.quanti = this.quanti - 1;
                          }, T.VoidTovoid()))]), T.VoidTovoid())})})])})}), new basic.Padding.new({padding: C[27] || CT.C27, child: new basic.Align.new({alignment: alignment.AlignmentDirectional.center, child: new container.Container.new({width: 100, height: 50, alignment: alignment.AlignmentDirectional.center, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(30), color: new ui.Color.fromARGB(255, 56, 54, 54)}), child: new text_button.TextButton.new({child: new text.Text.new("Purchase", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), onPressed: dart.fn(() => new _js_helper.LinkedMap.new(), T.VoidTovoid())})})})})])})})});
    }
    static ['_#new#tearOff']() {
      return new cart._CartState.new();
    }
  };
  (cart._CartState.new = function() {
    this.texto = Store.Store.login;
    this.loading = true;
    this.itens = 10;
    this.quanti = 0;
    cart._CartState.__proto__.new.call(this);
    ;
  }).prototype = cart._CartState.prototype;
  dart.addTypeTests(cart._CartState);
  dart.addTypeCaches(cart._CartState);
  dart.setMethodSignature(cart._CartState, () => ({
    __proto__: dart.getMethods(cart._CartState.__proto__),
    [_loadingImageIds$]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(cart._CartState, I[10]);
  dart.setFieldSignature(cart._CartState, () => ({
    __proto__: dart.getFields(cart._CartState.__proto__),
    texto: dart.finalFieldType(core.String),
    loading: dart.fieldType(core.bool),
    itens: dart.fieldType(core.int),
    quanti: dart.fieldType(core.int)
  }));
  feed.Feed = class Feed extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new feed.Feed.new({key: key});
    }
    createState() {
      return new feed._FeedState.new();
    }
  };
  (feed.Feed.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    feed.Feed.__proto__.new.call(this, {key: key});
    ;
  }).prototype = feed.Feed.prototype;
  dart.addTypeTests(feed.Feed);
  dart.addTypeCaches(feed.Feed);
  dart.setMethodSignature(feed.Feed, () => ({
    __proto__: dart.getMethods(feed.Feed.__proto__),
    createState: dart.fnType(framework.State$(feed.Feed), [])
  }));
  dart.setLibraryUri(feed.Feed, I[11]);
  var _setText = dart.privateName(feed, "_setText");
  feed._FeedState = class _FeedState extends framework.State$(feed.Feed) {
    [_setText]() {
      this.setState(dart.fn(() => {
        this.text = this.titleController.text;
      }, T.VoidTovoid()));
      this.increment();
      core.print("ol??");
    }
    increment() {
      return this.setState(dart.fn(() => this.cardValues[$add](this.text), T.VoidTovoid()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Feed")}), body: new scroll_view.CustomScrollView.new({slivers: T.JSArrayOfWidget().of([new sliver.SliverList.new({delegate: new sliver.SliverChildListDelegate.new(this.cardValues[$map](text.Text, dart.fn(e => new text.Text.new(e), T.StringToText()))[$toList]())}), new sliver_fill.SliverFillRemaining.new({hasScrollBody: false, fillOverscroll: true, child: new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new container.Container.new({margin: new edge_insets.EdgeInsets.all(10), constraints: new box.BoxConstraints.expand({height: 160, width: 160}), child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({labelText: "Comment"}), controller: this.titleController}), new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => this[_setText](), T.VoidTovoid()), child: new text.Text.new("Add")})])})})})})])})});
    }
    static ['_#new#tearOff']() {
      return new feed._FeedState.new();
    }
  };
  (feed._FeedState.new = function() {
    this.titleController = new editable_text.TextEditingController.new();
    this.text = "";
    this.cardValues = T.JSArrayOfString().of([]);
    feed._FeedState.__proto__.new.call(this);
    ;
  }).prototype = feed._FeedState.prototype;
  dart.addTypeTests(feed._FeedState);
  dart.addTypeCaches(feed._FeedState);
  dart.setMethodSignature(feed._FeedState, () => ({
    __proto__: dart.getMethods(feed._FeedState.__proto__),
    [_setText]: dart.fnType(dart.void, []),
    increment: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(feed._FeedState, I[11]);
  dart.setFieldSignature(feed._FeedState, () => ({
    __proto__: dart.getFields(feed._FeedState.__proto__),
    titleController: dart.finalFieldType(editable_text.TextEditingController),
    text: dart.fieldType(core.String),
    cardValues: dart.fieldType(core.List$(core.String))
  }));
  var color$ = dart.privateName(chasing_dots, "SpinKitChasingDots.color");
  var size$ = dart.privateName(chasing_dots, "SpinKitChasingDots.size");
  var itemBuilder$ = dart.privateName(chasing_dots, "SpinKitChasingDots.itemBuilder");
  var duration$ = dart.privateName(chasing_dots, "SpinKitChasingDots.duration");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  chasing_dots.SpinKitChasingDots = class SpinKitChasingDots extends framework.StatefulWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[28] || CT.C28;
      return new chasing_dots.SpinKitChasingDots.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration});
    }
    createState() {
      return new chasing_dots._SpinKitChasingDotsState.new();
    }
  };
  (chasing_dots.SpinKitChasingDots.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[28] || CT.C28;
    this[color$] = color;
    this[size$] = size;
    this[itemBuilder$] = itemBuilder;
    this[duration$] = duration;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[12], 10, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    chasing_dots.SpinKitChasingDots.__proto__.new.call(this, {key: key});
    ;
  }).prototype = chasing_dots.SpinKitChasingDots.prototype;
  dart.addTypeTests(chasing_dots.SpinKitChasingDots);
  dart.addTypeCaches(chasing_dots.SpinKitChasingDots);
  dart.setMethodSignature(chasing_dots.SpinKitChasingDots, () => ({
    __proto__: dart.getMethods(chasing_dots.SpinKitChasingDots.__proto__),
    createState: dart.fnType(chasing_dots._SpinKitChasingDotsState, [])
  }));
  dart.setLibraryUri(chasing_dots.SpinKitChasingDots, I[13]);
  dart.setFieldSignature(chasing_dots.SpinKitChasingDots, () => ({
    __proto__: dart.getFields(chasing_dots.SpinKitChasingDots.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration)
  }));
  var ___SpinKitChasingDotsState__scaleCtrl = dart.privateName(chasing_dots, "_#_SpinKitChasingDotsState#_scaleCtrl");
  var ___SpinKitChasingDotsState__rotateCtrl = dart.privateName(chasing_dots, "_#_SpinKitChasingDotsState#_rotateCtrl");
  var ___SpinKitChasingDotsState__scale = dart.privateName(chasing_dots, "_#_SpinKitChasingDotsState#_scale");
  var ___SpinKitChasingDotsState__rotate = dart.privateName(chasing_dots, "_#_SpinKitChasingDotsState#_rotate");
  var _scaleCtrl = dart.privateName(chasing_dots, "_scaleCtrl");
  var _rotateCtrl = dart.privateName(chasing_dots, "_rotateCtrl");
  var _scale = dart.privateName(chasing_dots, "_scale");
  var _rotate = dart.privateName(chasing_dots, "_rotate");
  var _circle = dart.privateName(chasing_dots, "_circle");
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(chasing_dots.SpinKitChasingDots) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(chasing_dots.SpinKitChasingDots)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(chasing_dots.SpinKitChasingDots));
  chasing_dots._SpinKitChasingDotsState = class _SpinKitChasingDotsState extends State_TickerProviderStateMixin$36 {
    get [_scaleCtrl]() {
      let t2;
      t2 = this[___SpinKitChasingDotsState__scaleCtrl];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_scaleCtrl")) : t2;
    }
    set [_scaleCtrl](library$32package$58flutter_spinkit$47src$47chasing_dots$46dart$58$58_scaleCtrl$35param) {
      this[___SpinKitChasingDotsState__scaleCtrl] = library$32package$58flutter_spinkit$47src$47chasing_dots$46dart$58$58_scaleCtrl$35param;
    }
    get [_rotateCtrl]() {
      let t2;
      t2 = this[___SpinKitChasingDotsState__rotateCtrl];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_rotateCtrl")) : t2;
    }
    set [_rotateCtrl](library$32package$58flutter_spinkit$47src$47chasing_dots$46dart$58$58_rotateCtrl$35param) {
      this[___SpinKitChasingDotsState__rotateCtrl] = library$32package$58flutter_spinkit$47src$47chasing_dots$46dart$58$58_rotateCtrl$35param;
    }
    get [_scale]() {
      let t2;
      t2 = this[___SpinKitChasingDotsState__scale];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_scale")) : t2;
    }
    set [_scale](library$32package$58flutter_spinkit$47src$47chasing_dots$46dart$58$58_scale$35param) {
      this[___SpinKitChasingDotsState__scale] = library$32package$58flutter_spinkit$47src$47chasing_dots$46dart$58$58_scale$35param;
    }
    get [_rotate]() {
      let t2;
      t2 = this[___SpinKitChasingDotsState__rotate];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_rotate")) : t2;
    }
    set [_rotate](library$32package$58flutter_spinkit$47src$47chasing_dots$46dart$58$58_rotate$35param) {
      this[___SpinKitChasingDotsState__rotate] = library$32package$58flutter_spinkit$47src$47chasing_dots$46dart$58$58_rotate$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_scaleCtrl] = (t2 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), (() => {
        t2.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t2.repeat({reverse: true});
        return t2;
      })());
      this[_scale] = new (T.TweenOfdouble()).new({begin: -1, end: 1}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: curves.Curves.easeInOut}));
      this[_rotateCtrl] = (t2$ = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), (() => {
        t2$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t2$.repeat();
        return t2$;
      })());
      this[_rotate] = new (T.TweenOfdouble()).new({begin: 0, end: 360}).animate(new animations.CurvedAnimation.new({parent: this[_rotateCtrl], curve: curves.Curves.linear}));
    }
    dispose() {
      this[_scaleCtrl].dispose();
      this[_rotateCtrl].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Transform.rotate({angle: this[_rotate].value * 0.0174533, child: new basic.Stack.new({children: T.JSArrayOfWidget().of([new basic.Positioned.new({top: 0, child: this[_circle](1 - this[_scale].value[$abs](), 0)}), new basic.Positioned.new({bottom: 0, child: this[_circle](this[_scale].value[$abs](), 1)})])})})})});
    }
    [_circle](scale, index) {
      return new basic.Transform.scale({scale: scale, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.6), child: this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.widget.color})})})});
    }
    static ['_#new#tearOff']() {
      return new chasing_dots._SpinKitChasingDotsState.new();
    }
  };
  (chasing_dots._SpinKitChasingDotsState.new = function() {
    this[___SpinKitChasingDotsState__scaleCtrl] = null;
    this[___SpinKitChasingDotsState__rotateCtrl] = null;
    this[___SpinKitChasingDotsState__scale] = null;
    this[___SpinKitChasingDotsState__rotate] = null;
    chasing_dots._SpinKitChasingDotsState.__proto__.new.call(this);
    ;
  }).prototype = chasing_dots._SpinKitChasingDotsState.prototype;
  dart.addTypeTests(chasing_dots._SpinKitChasingDotsState);
  dart.addTypeCaches(chasing_dots._SpinKitChasingDotsState);
  dart.setMethodSignature(chasing_dots._SpinKitChasingDotsState, () => ({
    __proto__: dart.getMethods(chasing_dots._SpinKitChasingDotsState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_circle]: dart.fnType(framework.Widget, [core.double, core.int])
  }));
  dart.setGetterSignature(chasing_dots._SpinKitChasingDotsState, () => ({
    __proto__: dart.getGetters(chasing_dots._SpinKitChasingDotsState.__proto__),
    [_scaleCtrl]: animation_controller.AnimationController,
    [_rotateCtrl]: animation_controller.AnimationController,
    [_scale]: animation.Animation$(core.double),
    [_rotate]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(chasing_dots._SpinKitChasingDotsState, () => ({
    __proto__: dart.getSetters(chasing_dots._SpinKitChasingDotsState.__proto__),
    [_scaleCtrl]: animation_controller.AnimationController,
    [_rotateCtrl]: animation_controller.AnimationController,
    [_scale]: animation.Animation$(core.double),
    [_rotate]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(chasing_dots._SpinKitChasingDotsState, I[13]);
  dart.setFieldSignature(chasing_dots._SpinKitChasingDotsState, () => ({
    __proto__: dart.getFields(chasing_dots._SpinKitChasingDotsState.__proto__),
    [___SpinKitChasingDotsState__scaleCtrl]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitChasingDotsState__rotateCtrl]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitChasingDotsState__scale]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitChasingDotsState__rotate]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$0 = dart.privateName(circle, "SpinKitCircle.color");
  var size$0 = dart.privateName(circle, "SpinKitCircle.size");
  var itemBuilder$0 = dart.privateName(circle, "SpinKitCircle.itemBuilder");
  var duration$0 = dart.privateName(circle, "SpinKitCircle.duration");
  var controller$ = dart.privateName(circle, "SpinKitCircle.controller");
  circle.SpinKitCircle = class SpinKitCircle extends framework.StatefulWidget {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$0];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$0];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new circle.SpinKitCircle.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new circle._SpinKitCircleState.new();
    }
  };
  (circle.SpinKitCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$0] = color;
    this[size$0] = size;
    this[itemBuilder$0] = itemBuilder;
    this[duration$0] = duration;
    this[controller$] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[14], 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    circle.SpinKitCircle.__proto__.new.call(this, {key: key});
    ;
  }).prototype = circle.SpinKitCircle.prototype;
  dart.addTypeTests(circle.SpinKitCircle);
  dart.addTypeCaches(circle.SpinKitCircle);
  dart.setMethodSignature(circle.SpinKitCircle, () => ({
    __proto__: dart.getMethods(circle.SpinKitCircle.__proto__),
    createState: dart.fnType(circle._SpinKitCircleState, [])
  }));
  dart.setLibraryUri(circle.SpinKitCircle, I[15]);
  dart.setFieldSignature(circle.SpinKitCircle, () => ({
    __proto__: dart.getFields(circle.SpinKitCircle.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitCircleState__controller = dart.privateName(circle, "_#_SpinKitCircleState#_controller");
  var _controller = dart.privateName(circle, "_controller");
  var _itemBuilder = dart.privateName(circle, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(circle.SpinKitCircle) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(circle.SpinKitCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(circle.SpinKitCircle));
  circle._SpinKitCircleState = class _SpinKitCircleState extends State_SingleTickerProviderStateMixin$36 {
    get [_controller]() {
      let t2;
      t2 = this[___SpinKitCircleState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller](library$32package$58flutter_spinkit$47src$47circle$46dart$58$58_controller$35param) {
      this[___SpinKitCircleState__controller] = library$32package$58flutter_spinkit$47src$47circle$46dart$58$58_controller$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.repeat();
        return t2$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: T.ListOfWidget().generate(this.delays[$length], dart.fn(index => {
              let _position = this.widget.size * 0.5;
              return new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(30 * index * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.ScaleTransition.new({scale: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: this.delays[$_get](index)}).animate(this[_controller]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.15), child: this[_itemBuilder](index)})})})})});
            }, T.intToPositioned()))})})});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle})});
    }
    static ['_#new#tearOff']() {
      return new circle._SpinKitCircleState.new();
    }
  };
  (circle._SpinKitCircleState.new = function() {
    this.delays = T.JSArrayOfdouble().of([0, -1.1, -1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1]);
    this[___SpinKitCircleState__controller] = null;
    circle._SpinKitCircleState.__proto__.new.call(this);
    ;
  }).prototype = circle._SpinKitCircleState.prototype;
  dart.addTypeTests(circle._SpinKitCircleState);
  dart.addTypeCaches(circle._SpinKitCircleState);
  dart.setMethodSignature(circle._SpinKitCircleState, () => ({
    __proto__: dart.getMethods(circle._SpinKitCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(circle._SpinKitCircleState, () => ({
    __proto__: dart.getGetters(circle._SpinKitCircleState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(circle._SpinKitCircleState, () => ({
    __proto__: dart.getSetters(circle._SpinKitCircleState.__proto__),
    [_controller]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(circle._SpinKitCircleState, I[15]);
  dart.setFieldSignature(circle._SpinKitCircleState, () => ({
    __proto__: dart.getFields(circle._SpinKitCircleState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [___SpinKitCircleState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var color$1 = dart.privateName(cube_grid, "SpinKitCubeGrid.color");
  var size$1 = dart.privateName(cube_grid, "SpinKitCubeGrid.size");
  var itemBuilder$1 = dart.privateName(cube_grid, "SpinKitCubeGrid.itemBuilder");
  var duration$1 = dart.privateName(cube_grid, "SpinKitCubeGrid.duration");
  var controller$0 = dart.privateName(cube_grid, "SpinKitCubeGrid.controller");
  cube_grid.SpinKitCubeGrid = class SpinKitCubeGrid extends framework.StatefulWidget {
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$1];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$1];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$1];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new cube_grid.SpinKitCubeGrid.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new cube_grid._SpinKitCubeGridState.new();
    }
  };
  (cube_grid.SpinKitCubeGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$1] = color;
    this[size$1] = size;
    this[itemBuilder$1] = itemBuilder;
    this[duration$1] = duration;
    this[controller$0] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[16], 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    cube_grid.SpinKitCubeGrid.__proto__.new.call(this, {key: key});
    ;
  }).prototype = cube_grid.SpinKitCubeGrid.prototype;
  dart.addTypeTests(cube_grid.SpinKitCubeGrid);
  dart.addTypeCaches(cube_grid.SpinKitCubeGrid);
  dart.setMethodSignature(cube_grid.SpinKitCubeGrid, () => ({
    __proto__: dart.getMethods(cube_grid.SpinKitCubeGrid.__proto__),
    createState: dart.fnType(cube_grid._SpinKitCubeGridState, [])
  }));
  dart.setLibraryUri(cube_grid.SpinKitCubeGrid, I[17]);
  dart.setFieldSignature(cube_grid.SpinKitCubeGrid, () => ({
    __proto__: dart.getFields(cube_grid.SpinKitCubeGrid.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitCubeGridState__controller = dart.privateName(cube_grid, "_#_SpinKitCubeGridState#_controller");
  var ___SpinKitCubeGridState__anim1 = dart.privateName(cube_grid, "_#_SpinKitCubeGridState#_anim1");
  var ___SpinKitCubeGridState__anim2 = dart.privateName(cube_grid, "_#_SpinKitCubeGridState#_anim2");
  var ___SpinKitCubeGridState__anim3 = dart.privateName(cube_grid, "_#_SpinKitCubeGridState#_anim3");
  var ___SpinKitCubeGridState__anim4 = dart.privateName(cube_grid, "_#_SpinKitCubeGridState#_anim4");
  var ___SpinKitCubeGridState__anim5 = dart.privateName(cube_grid, "_#_SpinKitCubeGridState#_anim5");
  var _controller$ = dart.privateName(cube_grid, "_controller");
  var _anim1 = dart.privateName(cube_grid, "_anim1");
  var _anim2 = dart.privateName(cube_grid, "_anim2");
  var _anim3 = dart.privateName(cube_grid, "_anim3");
  var _anim4 = dart.privateName(cube_grid, "_anim4");
  var _anim5 = dart.privateName(cube_grid, "_anim5");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var Interval_curve = dart.privateName(curves, "Interval.curve");
  var Interval_end = dart.privateName(curves, "Interval.end");
  var Interval_begin = dart.privateName(curves, "Interval.begin");
  var _square = dart.privateName(cube_grid, "_square");
  var _itemBuilder$ = dart.privateName(cube_grid, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$ = class State_SingleTickerProviderStateMixin extends framework.State$(cube_grid.SpinKitCubeGrid) {};
  (State_SingleTickerProviderStateMixin$36$.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(cube_grid.SpinKitCubeGrid)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$, ticker_provider.SingleTickerProviderStateMixin$(cube_grid.SpinKitCubeGrid));
  cube_grid._SpinKitCubeGridState = class _SpinKitCubeGridState extends State_SingleTickerProviderStateMixin$36$ {
    get [_controller$]() {
      let t2;
      t2 = this[___SpinKitCubeGridState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$](library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_controller$35param) {
      this[___SpinKitCubeGridState__controller] = library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_controller$35param;
    }
    get [_anim1]() {
      let t2;
      t2 = this[___SpinKitCubeGridState__anim1];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_anim1")) : t2;
    }
    set [_anim1](library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim1$35param) {
      this[___SpinKitCubeGridState__anim1] = library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim1$35param;
    }
    get [_anim2]() {
      let t2;
      t2 = this[___SpinKitCubeGridState__anim2];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_anim2")) : t2;
    }
    set [_anim2](library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim2$35param) {
      this[___SpinKitCubeGridState__anim2] = library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim2$35param;
    }
    get [_anim3]() {
      let t2;
      t2 = this[___SpinKitCubeGridState__anim3];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_anim3")) : t2;
    }
    set [_anim3](library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim3$35param) {
      this[___SpinKitCubeGridState__anim3] = library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim3$35param;
    }
    get [_anim4]() {
      let t2;
      t2 = this[___SpinKitCubeGridState__anim4];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_anim4")) : t2;
    }
    set [_anim4](library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim4$35param) {
      this[___SpinKitCubeGridState__anim4] = library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim4$35param;
    }
    get [_anim5]() {
      let t2;
      t2 = this[___SpinKitCubeGridState__anim5];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_anim5")) : t2;
    }
    set [_anim5](library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim5$35param) {
      this[___SpinKitCubeGridState__anim5] = library$32package$58flutter_spinkit$47src$47cube_grid$46dart$58$58_anim5$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.repeat({reverse: true});
        return t2$;
      })());
      this[_anim1] = new (T.TweenOfdouble()).new({begin: 1, end: 0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$], curve: C[30] || CT.C30}));
      this[_anim2] = new (T.TweenOfdouble()).new({begin: 1, end: 0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$], curve: C[32] || CT.C32}));
      this[_anim3] = new (T.TweenOfdouble()).new({begin: 1, end: 0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$], curve: C[33] || CT.C33}));
      this[_anim4] = new (T.TweenOfdouble()).new({begin: 1, end: 0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$], curve: C[34] || CT.C34}));
      this[_anim5] = new (T.TweenOfdouble()).new({begin: 1, end: 0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$], curve: C[35] || CT.C35}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.max, children: T.JSArrayOfWidget().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([this[_square](this[_anim3], 0), this[_square](this[_anim4], 1), this[_square](this[_anim5], 2)])}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([this[_square](this[_anim2], 3), this[_square](this[_anim3], 4), this[_square](this[_anim4], 5)])}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([this[_square](this[_anim1], 6), this[_square](this[_anim2], 7), this[_square](this[_anim3], 8)])})])})});
    }
    [_square](animation, index) {
      return new transitions.ScaleTransition.new({scale: animation, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size / 3), child: this[_itemBuilder$](index)})});
    }
    [_itemBuilder$](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color})});
    }
    static ['_#new#tearOff']() {
      return new cube_grid._SpinKitCubeGridState.new();
    }
  };
  (cube_grid._SpinKitCubeGridState.new = function() {
    this[___SpinKitCubeGridState__controller] = null;
    this[___SpinKitCubeGridState__anim1] = null;
    this[___SpinKitCubeGridState__anim2] = null;
    this[___SpinKitCubeGridState__anim3] = null;
    this[___SpinKitCubeGridState__anim4] = null;
    this[___SpinKitCubeGridState__anim5] = null;
    cube_grid._SpinKitCubeGridState.__proto__.new.call(this);
    ;
  }).prototype = cube_grid._SpinKitCubeGridState.prototype;
  dart.addTypeTests(cube_grid._SpinKitCubeGridState);
  dart.addTypeCaches(cube_grid._SpinKitCubeGridState);
  dart.setMethodSignature(cube_grid._SpinKitCubeGridState, () => ({
    __proto__: dart.getMethods(cube_grid._SpinKitCubeGridState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_square]: dart.fnType(framework.Widget, [animation.Animation$(core.double), core.int]),
    [_itemBuilder$]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(cube_grid._SpinKitCubeGridState, () => ({
    __proto__: dart.getGetters(cube_grid._SpinKitCubeGridState.__proto__),
    [_controller$]: animation_controller.AnimationController,
    [_anim1]: animation.Animation$(core.double),
    [_anim2]: animation.Animation$(core.double),
    [_anim3]: animation.Animation$(core.double),
    [_anim4]: animation.Animation$(core.double),
    [_anim5]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(cube_grid._SpinKitCubeGridState, () => ({
    __proto__: dart.getSetters(cube_grid._SpinKitCubeGridState.__proto__),
    [_controller$]: animation_controller.AnimationController,
    [_anim1]: animation.Animation$(core.double),
    [_anim2]: animation.Animation$(core.double),
    [_anim3]: animation.Animation$(core.double),
    [_anim4]: animation.Animation$(core.double),
    [_anim5]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(cube_grid._SpinKitCubeGridState, I[17]);
  dart.setFieldSignature(cube_grid._SpinKitCubeGridState, () => ({
    __proto__: dart.getFields(cube_grid._SpinKitCubeGridState.__proto__),
    [___SpinKitCubeGridState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitCubeGridState__anim1]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitCubeGridState__anim2]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitCubeGridState__anim3]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitCubeGridState__anim4]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitCubeGridState__anim5]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$2 = dart.privateName(dancing_square, "SpinKitDancingSquare.color");
  var size$2 = dart.privateName(dancing_square, "SpinKitDancingSquare.size");
  var itemBuilder$2 = dart.privateName(dancing_square, "SpinKitDancingSquare.itemBuilder");
  var duration$2 = dart.privateName(dancing_square, "SpinKitDancingSquare.duration");
  var controller$1 = dart.privateName(dancing_square, "SpinKitDancingSquare.controller");
  dancing_square.SpinKitDancingSquare = class SpinKitDancingSquare extends framework.StatefulWidget {
    get color() {
      return this[color$2];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$2];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$2];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$2];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$1];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 60;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new dancing_square.SpinKitDancingSquare.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new dancing_square._SpinKitDancingSquareState.new();
    }
  };
  (dancing_square.SpinKitDancingSquare.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 60;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$2] = color;
    this[size$2] = size;
    this[itemBuilder$2] = itemBuilder;
    this[duration$2] = duration;
    this[controller$1] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[18], 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    dancing_square.SpinKitDancingSquare.__proto__.new.call(this, {key: key});
    ;
  }).prototype = dancing_square.SpinKitDancingSquare.prototype;
  dart.addTypeTests(dancing_square.SpinKitDancingSquare);
  dart.addTypeCaches(dancing_square.SpinKitDancingSquare);
  dart.setMethodSignature(dancing_square.SpinKitDancingSquare, () => ({
    __proto__: dart.getMethods(dancing_square.SpinKitDancingSquare.__proto__),
    createState: dart.fnType(dancing_square._SpinKitDancingSquareState, [])
  }));
  dart.setLibraryUri(dancing_square.SpinKitDancingSquare, I[19]);
  dart.setFieldSignature(dancing_square.SpinKitDancingSquare, () => ({
    __proto__: dart.getFields(dancing_square.SpinKitDancingSquare.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitDancingSquareState__controller = dart.privateName(dancing_square, "_#_SpinKitDancingSquareState#_controller");
  var _controller$0 = dart.privateName(dancing_square, "_controller");
  var _itemBuilder$0 = dart.privateName(dancing_square, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$0 = class State_SingleTickerProviderStateMixin extends framework.State$(dancing_square.SpinKitDancingSquare) {};
  (State_SingleTickerProviderStateMixin$36$0.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(dancing_square.SpinKitDancingSquare)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$0.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$0.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$0, ticker_provider.SingleTickerProviderStateMixin$(dancing_square.SpinKitDancingSquare));
  dancing_square._SpinKitDancingSquareState = class _SpinKitDancingSquareState extends State_SingleTickerProviderStateMixin$36$0 {
    get [_controller$0]() {
      let t2;
      t2 = this[___SpinKitDancingSquareState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$0](library$32package$58flutter_spinkit$47src$47dancing_square$46dart$58$58_controller$35param) {
      this[___SpinKitDancingSquareState__controller] = library$32package$58flutter_spinkit$47src$47dancing_square$46dart$58$58_controller$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$0] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.repeat();
        return t2$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$0].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: T.ListOfWidget().generate(this.delays[$length], dart.fn(index => {
              let _position = this.widget.size * 0.5;
              return new basic.Stack.new({children: T.JSArrayOfWidget().of([new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationX(30 * index * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.ScaleTransition.new({scale: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: this.delays[$_get](index)}).animate(this[_controller$0]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.15), child: this[_itemBuilder$0](index)})})})})}), new basic.Positioned.fill({left: _position, top: -1 * _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationY(30 * index * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.ScaleTransition.new({scale: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: this.delays[$_get](index)}).animate(this[_controller$0]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.15), child: this[_itemBuilder$0](index)})})})})}), new basic.Positioned.fill({left: -1 * _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationX(30 * index * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.ScaleTransition.new({scale: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: this.delays[$_get](index)}).animate(this[_controller$0]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.15), child: this[_itemBuilder$0](index)})})})})}), new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationY(30 * index * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.ScaleTransition.new({scale: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: this.delays[$_get](index)}).animate(this[_controller$0]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.15), child: this[_itemBuilder$0](index)})})})})})])});
            }, T.intToStack()))})})});
    }
    [_itemBuilder$0](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.rectangle})});
    }
    static ['_#new#tearOff']() {
      return new dancing_square._SpinKitDancingSquareState.new();
    }
  };
  (dancing_square._SpinKitDancingSquareState.new = function() {
    this.delays = T.JSArrayOfdouble().of([0, -1.1, -1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1]);
    this[___SpinKitDancingSquareState__controller] = null;
    dancing_square._SpinKitDancingSquareState.__proto__.new.call(this);
    ;
  }).prototype = dancing_square._SpinKitDancingSquareState.prototype;
  dart.addTypeTests(dancing_square._SpinKitDancingSquareState);
  dart.addTypeCaches(dancing_square._SpinKitDancingSquareState);
  dart.setMethodSignature(dancing_square._SpinKitDancingSquareState, () => ({
    __proto__: dart.getMethods(dancing_square._SpinKitDancingSquareState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$0]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(dancing_square._SpinKitDancingSquareState, () => ({
    __proto__: dart.getGetters(dancing_square._SpinKitDancingSquareState.__proto__),
    [_controller$0]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(dancing_square._SpinKitDancingSquareState, () => ({
    __proto__: dart.getSetters(dancing_square._SpinKitDancingSquareState.__proto__),
    [_controller$0]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(dancing_square._SpinKitDancingSquareState, I[19]);
  dart.setFieldSignature(dancing_square._SpinKitDancingSquareState, () => ({
    __proto__: dart.getFields(dancing_square._SpinKitDancingSquareState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [___SpinKitDancingSquareState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var color$3 = dart.privateName(double_bounce, "SpinKitDoubleBounce.color");
  var size$3 = dart.privateName(double_bounce, "SpinKitDoubleBounce.size");
  var itemBuilder$3 = dart.privateName(double_bounce, "SpinKitDoubleBounce.itemBuilder");
  var duration$3 = dart.privateName(double_bounce, "SpinKitDoubleBounce.duration");
  var controller$2 = dart.privateName(double_bounce, "SpinKitDoubleBounce.controller");
  double_bounce.SpinKitDoubleBounce = class SpinKitDoubleBounce extends framework.StatefulWidget {
    get color() {
      return this[color$3];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$3];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$3];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$3];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$2];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[28] || CT.C28;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new double_bounce.SpinKitDoubleBounce.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new double_bounce._SpinKitDoubleBounceState.new();
    }
  };
  (double_bounce.SpinKitDoubleBounce.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[28] || CT.C28;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$3] = color;
    this[size$3] = size;
    this[itemBuilder$3] = itemBuilder;
    this[duration$3] = duration;
    this[controller$2] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[20], 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    double_bounce.SpinKitDoubleBounce.__proto__.new.call(this, {key: key});
    ;
  }).prototype = double_bounce.SpinKitDoubleBounce.prototype;
  dart.addTypeTests(double_bounce.SpinKitDoubleBounce);
  dart.addTypeCaches(double_bounce.SpinKitDoubleBounce);
  dart.setMethodSignature(double_bounce.SpinKitDoubleBounce, () => ({
    __proto__: dart.getMethods(double_bounce.SpinKitDoubleBounce.__proto__),
    createState: dart.fnType(double_bounce._SpinKitDoubleBounceState, [])
  }));
  dart.setLibraryUri(double_bounce.SpinKitDoubleBounce, I[21]);
  dart.setFieldSignature(double_bounce.SpinKitDoubleBounce, () => ({
    __proto__: dart.getFields(double_bounce.SpinKitDoubleBounce.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitDoubleBounceState__controller = dart.privateName(double_bounce, "_#_SpinKitDoubleBounceState#_controller");
  var ___SpinKitDoubleBounceState__animation = dart.privateName(double_bounce, "_#_SpinKitDoubleBounceState#_animation");
  var _controller$1 = dart.privateName(double_bounce, "_controller");
  var _animation = dart.privateName(double_bounce, "_animation");
  var _itemBuilder$1 = dart.privateName(double_bounce, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$1 = class State_SingleTickerProviderStateMixin extends framework.State$(double_bounce.SpinKitDoubleBounce) {};
  (State_SingleTickerProviderStateMixin$36$1.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(double_bounce.SpinKitDoubleBounce)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$1.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$1.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$1, ticker_provider.SingleTickerProviderStateMixin$(double_bounce.SpinKitDoubleBounce));
  double_bounce._SpinKitDoubleBounceState = class _SpinKitDoubleBounceState extends State_SingleTickerProviderStateMixin$36$1 {
    get [_controller$1]() {
      let t2;
      t2 = this[___SpinKitDoubleBounceState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$1](library$32package$58flutter_spinkit$47src$47double_bounce$46dart$58$58_controller$35param) {
      this[___SpinKitDoubleBounceState__controller] = library$32package$58flutter_spinkit$47src$47double_bounce$46dart$58$58_controller$35param;
    }
    get [_animation]() {
      let t2;
      t2 = this[___SpinKitDoubleBounceState__animation];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_animation")) : t2;
    }
    set [_animation](library$32package$58flutter_spinkit$47src$47double_bounce$46dart$58$58_animation$35param) {
      this[___SpinKitDoubleBounceState__animation] = library$32package$58flutter_spinkit$47src$47double_bounce$46dart$58$58_animation$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$1] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t2$.repeat({reverse: true});
        return t2$;
      })());
      this[_animation] = new (T.TweenOfdouble()).new({begin: -1, end: 1}).animate(new animations.CurvedAnimation.new({parent: this[_controller$1], curve: curves.Curves.easeInOut}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$1].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.Stack.new({children: T.ListOfWidget().generate(2, dart.fn(i => new basic.Transform.scale({scale: (1 - i - this[_animation].value[$abs]())[$abs](), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$1](i)})}), T.intToTransform()))})});
    }
    [_itemBuilder$1](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: dart.nullCheck(this.widget.color).withOpacity(0.6)})});
    }
    static ['_#new#tearOff']() {
      return new double_bounce._SpinKitDoubleBounceState.new();
    }
  };
  (double_bounce._SpinKitDoubleBounceState.new = function() {
    this[___SpinKitDoubleBounceState__controller] = null;
    this[___SpinKitDoubleBounceState__animation] = null;
    double_bounce._SpinKitDoubleBounceState.__proto__.new.call(this);
    ;
  }).prototype = double_bounce._SpinKitDoubleBounceState.prototype;
  dart.addTypeTests(double_bounce._SpinKitDoubleBounceState);
  dart.addTypeCaches(double_bounce._SpinKitDoubleBounceState);
  dart.setMethodSignature(double_bounce._SpinKitDoubleBounceState, () => ({
    __proto__: dart.getMethods(double_bounce._SpinKitDoubleBounceState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$1]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(double_bounce._SpinKitDoubleBounceState, () => ({
    __proto__: dart.getGetters(double_bounce._SpinKitDoubleBounceState.__proto__),
    [_controller$1]: animation_controller.AnimationController,
    [_animation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(double_bounce._SpinKitDoubleBounceState, () => ({
    __proto__: dart.getSetters(double_bounce._SpinKitDoubleBounceState.__proto__),
    [_controller$1]: animation_controller.AnimationController,
    [_animation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(double_bounce._SpinKitDoubleBounceState, I[21]);
  dart.setFieldSignature(double_bounce._SpinKitDoubleBounceState, () => ({
    __proto__: dart.getFields(double_bounce._SpinKitDoubleBounceState.__proto__),
    [___SpinKitDoubleBounceState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitDoubleBounceState__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$4 = dart.privateName(dual_ring, "SpinKitDualRing.color");
  var lineWidth$ = dart.privateName(dual_ring, "SpinKitDualRing.lineWidth");
  var size$4 = dart.privateName(dual_ring, "SpinKitDualRing.size");
  var duration$4 = dart.privateName(dual_ring, "SpinKitDualRing.duration");
  var controller$3 = dart.privateName(dual_ring, "SpinKitDualRing.controller");
  dual_ring.SpinKitDualRing = class SpinKitDualRing extends framework.StatefulWidget {
    get color() {
      return this[color$4];
    }
    set color(value) {
      super.color = value;
    }
    get lineWidth() {
      return this[lineWidth$];
    }
    set lineWidth(value) {
      super.lineWidth = value;
    }
    get size() {
      return this[size$4];
    }
    set size(value) {
      super.size = value;
    }
    get duration() {
      return this[duration$4];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$3];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 7;
      let size = opts && 'size' in opts ? opts.size : 50;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new dual_ring.SpinKitDualRing.new({key: key, color: color, lineWidth: lineWidth, size: size, duration: duration, controller: controller});
    }
    createState() {
      return new dual_ring._SpinKitDualRingState.new();
    }
  };
  (dual_ring.SpinKitDualRing.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 7;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$4] = color;
    this[lineWidth$] = lineWidth;
    this[size$4] = size;
    this[duration$4] = duration;
    this[controller$3] = controller;
    dual_ring.SpinKitDualRing.__proto__.new.call(this, {key: key});
    ;
  }).prototype = dual_ring.SpinKitDualRing.prototype;
  dart.addTypeTests(dual_ring.SpinKitDualRing);
  dart.addTypeCaches(dual_ring.SpinKitDualRing);
  dart.setMethodSignature(dual_ring.SpinKitDualRing, () => ({
    __proto__: dart.getMethods(dual_ring.SpinKitDualRing.__proto__),
    createState: dart.fnType(dual_ring._SpinKitDualRingState, [])
  }));
  dart.setLibraryUri(dual_ring.SpinKitDualRing, I[22]);
  dart.setFieldSignature(dual_ring.SpinKitDualRing, () => ({
    __proto__: dart.getFields(dual_ring.SpinKitDualRing.__proto__),
    color: dart.finalFieldType(ui.Color),
    lineWidth: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitDualRingState__controller = dart.privateName(dual_ring, "_#_SpinKitDualRingState#_controller");
  var ___SpinKitDualRingState__animation = dart.privateName(dual_ring, "_#_SpinKitDualRingState#_animation");
  var _controller$2 = dart.privateName(dual_ring, "_controller");
  var _animation$ = dart.privateName(dual_ring, "_animation");
  const State_SingleTickerProviderStateMixin$36$2 = class State_SingleTickerProviderStateMixin extends framework.State$(dual_ring.SpinKitDualRing) {};
  (State_SingleTickerProviderStateMixin$36$2.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(dual_ring.SpinKitDualRing)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$2.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$2.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$2, ticker_provider.SingleTickerProviderStateMixin$(dual_ring.SpinKitDualRing));
  dual_ring._SpinKitDualRingState = class _SpinKitDualRingState extends State_SingleTickerProviderStateMixin$36$2 {
    get [_controller$2]() {
      let t2;
      t2 = this[___SpinKitDualRingState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$2](library$32package$58flutter_spinkit$47src$47dual_ring$46dart$58$58_controller$35param) {
      this[___SpinKitDualRingState__controller] = library$32package$58flutter_spinkit$47src$47dual_ring$46dart$58$58_controller$35param;
    }
    get [_animation$]() {
      let t2;
      t2 = this[___SpinKitDualRingState__animation];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_animation")) : t2;
    }
    set [_animation$](library$32package$58flutter_spinkit$47src$47dual_ring$46dart$58$58_animation$35param) {
      this[___SpinKitDualRingState__animation] = library$32package$58flutter_spinkit$47src$47dual_ring$46dart$58$58_animation$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$2] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t2$.repeat();
        return t2$;
      })());
      this[_animation$] = new (T.TweenOfdouble()).new({begin: 0, end: 1}).animate(new animations.CurvedAnimation.new({parent: this[_controller$2], curve: C[36] || CT.C36}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$2].dispose();
      }
      super.dispose();
    }
    build(context) {
      let t2;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t2 = vector_math_64.Matrix4.identity(), (() => {
            t2.rotateZ(this[_animation$].value * 3.141592653589793 * 2);
            return t2;
          })()), alignment: fractional_offset.FractionalOffset.center, child: new basic.CustomPaint.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size)}), painter: new dual_ring._DualRingPainter.new({paintWidth: this.widget.lineWidth, color: this.widget.color})})})});
    }
    static ['_#new#tearOff']() {
      return new dual_ring._SpinKitDualRingState.new();
    }
  };
  (dual_ring._SpinKitDualRingState.new = function() {
    this[___SpinKitDualRingState__controller] = null;
    this[___SpinKitDualRingState__animation] = null;
    dual_ring._SpinKitDualRingState.__proto__.new.call(this);
    ;
  }).prototype = dual_ring._SpinKitDualRingState.prototype;
  dart.addTypeTests(dual_ring._SpinKitDualRingState);
  dart.addTypeCaches(dual_ring._SpinKitDualRingState);
  dart.setMethodSignature(dual_ring._SpinKitDualRingState, () => ({
    __proto__: dart.getMethods(dual_ring._SpinKitDualRingState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(dual_ring._SpinKitDualRingState, () => ({
    __proto__: dart.getGetters(dual_ring._SpinKitDualRingState.__proto__),
    [_controller$2]: animation_controller.AnimationController,
    [_animation$]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(dual_ring._SpinKitDualRingState, () => ({
    __proto__: dart.getSetters(dual_ring._SpinKitDualRingState.__proto__),
    [_controller$2]: animation_controller.AnimationController,
    [_animation$]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(dual_ring._SpinKitDualRingState, I[22]);
  dart.setFieldSignature(dual_ring._SpinKitDualRingState, () => ({
    __proto__: dart.getFields(dual_ring._SpinKitDualRingState.__proto__),
    [___SpinKitDualRingState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitDualRingState__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  dual_ring._DualRingPainter = class _DualRingPainter extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](opts) {
      let angle = opts && 'angle' in opts ? opts.angle : 90;
      let paintWidth = opts && 'paintWidth' in opts ? opts.paintWidth : null;
      let color = opts && 'color' in opts ? opts.color : null;
      return new dual_ring._DualRingPainter.new({angle: angle, paintWidth: paintWidth, color: color});
    }
    paint(canvas, size) {
      let rect = new ui.Rect.fromPoints(ui.Offset.zero, new ui.Offset.new(size.width, size.height));
      canvas.drawArc(rect, 0, this.getRadian(this.angle), false, this.ringPaint);
      canvas.drawArc(rect, this.getRadian(180), this.getRadian(this.angle), false, this.ringPaint);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return true;
    }
    getRadian(angle) {
      return 3.141592653589793 / 180 * angle;
    }
  };
  (dual_ring._DualRingPainter.new = function(opts) {
    let t2;
    let angle = opts && 'angle' in opts ? opts.angle : 90;
    let paintWidth = opts && 'paintWidth' in opts ? opts.paintWidth : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this.angle = angle;
    this.ringPaint = (t2 = ui.Paint.new(), (() => {
      t2.color = color;
      t2.strokeWidth = paintWidth;
      t2.style = ui.PaintingStyle.stroke;
      return t2;
    })());
    dual_ring._DualRingPainter.__proto__.new.call(this);
    ;
  }).prototype = dual_ring._DualRingPainter.prototype;
  dart.addTypeTests(dual_ring._DualRingPainter);
  dart.addTypeCaches(dual_ring._DualRingPainter);
  dart.setMethodSignature(dual_ring._DualRingPainter, () => ({
    __proto__: dart.getMethods(dual_ring._DualRingPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    getRadian: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(dual_ring._DualRingPainter, I[22]);
  dart.setFieldSignature(dual_ring._DualRingPainter, () => ({
    __proto__: dart.getFields(dual_ring._DualRingPainter.__proto__),
    ringPaint: dart.finalFieldType(ui.Paint),
    angle: dart.finalFieldType(core.double)
  }));
  var color$5 = dart.privateName(fading_circle, "SpinKitFadingCircle.color");
  var size$5 = dart.privateName(fading_circle, "SpinKitFadingCircle.size");
  var itemBuilder$4 = dart.privateName(fading_circle, "SpinKitFadingCircle.itemBuilder");
  var duration$5 = dart.privateName(fading_circle, "SpinKitFadingCircle.duration");
  var controller$4 = dart.privateName(fading_circle, "SpinKitFadingCircle.controller");
  fading_circle.SpinKitFadingCircle = class SpinKitFadingCircle extends framework.StatefulWidget {
    get color() {
      return this[color$5];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$5];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$4];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$5];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$4];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new fading_circle.SpinKitFadingCircle.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new fading_circle._SpinKitFadingCircleState.new();
    }
  };
  (fading_circle.SpinKitFadingCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$5] = color;
    this[size$5] = size;
    this[itemBuilder$4] = itemBuilder;
    this[duration$5] = duration;
    this[controller$4] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[23], 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    fading_circle.SpinKitFadingCircle.__proto__.new.call(this, {key: key});
    ;
  }).prototype = fading_circle.SpinKitFadingCircle.prototype;
  dart.addTypeTests(fading_circle.SpinKitFadingCircle);
  dart.addTypeCaches(fading_circle.SpinKitFadingCircle);
  dart.setMethodSignature(fading_circle.SpinKitFadingCircle, () => ({
    __proto__: dart.getMethods(fading_circle.SpinKitFadingCircle.__proto__),
    createState: dart.fnType(fading_circle._SpinKitFadingCircleState, [])
  }));
  dart.setLibraryUri(fading_circle.SpinKitFadingCircle, I[24]);
  dart.setFieldSignature(fading_circle.SpinKitFadingCircle, () => ({
    __proto__: dart.getFields(fading_circle.SpinKitFadingCircle.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitFadingCircleState__controller = dart.privateName(fading_circle, "_#_SpinKitFadingCircleState#_controller");
  var _controller$3 = dart.privateName(fading_circle, "_controller");
  var _itemBuilder$2 = dart.privateName(fading_circle, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$3 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_circle.SpinKitFadingCircle) {};
  (State_SingleTickerProviderStateMixin$36$3.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_circle.SpinKitFadingCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$3.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$3.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$3, ticker_provider.SingleTickerProviderStateMixin$(fading_circle.SpinKitFadingCircle));
  fading_circle._SpinKitFadingCircleState = class _SpinKitFadingCircleState extends State_SingleTickerProviderStateMixin$36$3 {
    get [_controller$3]() {
      let t2;
      t2 = this[___SpinKitFadingCircleState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$3](library$32package$58flutter_spinkit$47src$47fading_circle$46dart$58$58_controller$35param) {
      this[___SpinKitFadingCircleState__controller] = library$32package$58flutter_spinkit$47src$47fading_circle$46dart$58$58_controller$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$3] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.repeat();
        return t2$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$3].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: T.ListOfWidget().generate(12, dart.fn(i => {
              let _position = this.widget.size * 0.5;
              return new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(30 * i * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.FadeTransition.new({opacity: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: this.delays[$_get](i)}).animate(this[_controller$3]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.15), child: this[_itemBuilder$2](i)})})})})});
            }, T.intToPositioned()))})})});
    }
    [_itemBuilder$2](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle})});
    }
    static ['_#new#tearOff']() {
      return new fading_circle._SpinKitFadingCircleState.new();
    }
  };
  (fading_circle._SpinKitFadingCircleState.new = function() {
    this.delays = T.JSArrayOfdouble().of([0, -1.1, -1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1]);
    this[___SpinKitFadingCircleState__controller] = null;
    fading_circle._SpinKitFadingCircleState.__proto__.new.call(this);
    ;
  }).prototype = fading_circle._SpinKitFadingCircleState.prototype;
  dart.addTypeTests(fading_circle._SpinKitFadingCircleState);
  dart.addTypeCaches(fading_circle._SpinKitFadingCircleState);
  dart.setMethodSignature(fading_circle._SpinKitFadingCircleState, () => ({
    __proto__: dart.getMethods(fading_circle._SpinKitFadingCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$2]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(fading_circle._SpinKitFadingCircleState, () => ({
    __proto__: dart.getGetters(fading_circle._SpinKitFadingCircleState.__proto__),
    [_controller$3]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(fading_circle._SpinKitFadingCircleState, () => ({
    __proto__: dart.getSetters(fading_circle._SpinKitFadingCircleState.__proto__),
    [_controller$3]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(fading_circle._SpinKitFadingCircleState, I[24]);
  dart.setFieldSignature(fading_circle._SpinKitFadingCircleState, () => ({
    __proto__: dart.getFields(fading_circle._SpinKitFadingCircleState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [___SpinKitFadingCircleState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var color$6 = dart.privateName(fading_cube, "SpinKitFadingCube.color");
  var size$6 = dart.privateName(fading_cube, "SpinKitFadingCube.size");
  var itemBuilder$5 = dart.privateName(fading_cube, "SpinKitFadingCube.itemBuilder");
  var duration$6 = dart.privateName(fading_cube, "SpinKitFadingCube.duration");
  var controller$5 = dart.privateName(fading_cube, "SpinKitFadingCube.controller");
  fading_cube.SpinKitFadingCube = class SpinKitFadingCube extends framework.StatefulWidget {
    get color() {
      return this[color$6];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$6];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$5];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$6];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$5];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new fading_cube.SpinKitFadingCube.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new fading_cube._SpinKitFadingCubeState.new();
    }
  };
  (fading_cube.SpinKitFadingCube.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$6] = color;
    this[size$6] = size;
    this[itemBuilder$5] = itemBuilder;
    this[duration$6] = duration;
    this[controller$5] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[25], 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    fading_cube.SpinKitFadingCube.__proto__.new.call(this, {key: key});
    ;
  }).prototype = fading_cube.SpinKitFadingCube.prototype;
  dart.addTypeTests(fading_cube.SpinKitFadingCube);
  dart.addTypeCaches(fading_cube.SpinKitFadingCube);
  dart.setMethodSignature(fading_cube.SpinKitFadingCube, () => ({
    __proto__: dart.getMethods(fading_cube.SpinKitFadingCube.__proto__),
    createState: dart.fnType(fading_cube._SpinKitFadingCubeState, [])
  }));
  dart.setLibraryUri(fading_cube.SpinKitFadingCube, I[26]);
  dart.setFieldSignature(fading_cube.SpinKitFadingCube, () => ({
    __proto__: dart.getFields(fading_cube.SpinKitFadingCube.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitFadingCubeState__controller = dart.privateName(fading_cube, "_#_SpinKitFadingCubeState#_controller");
  var _controller$4 = dart.privateName(fading_cube, "_controller");
  var _itemBuilder$3 = dart.privateName(fading_cube, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$4 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_cube.SpinKitFadingCube) {};
  (State_SingleTickerProviderStateMixin$36$4.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_cube.SpinKitFadingCube)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$4.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$4.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$4, ticker_provider.SingleTickerProviderStateMixin$(fading_cube.SpinKitFadingCube));
  fading_cube._SpinKitFadingCubeState = class _SpinKitFadingCubeState extends State_SingleTickerProviderStateMixin$36$4 {
    get [_controller$4]() {
      let t2;
      t2 = this[___SpinKitFadingCubeState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$4](library$32package$58flutter_spinkit$47src$47fading_cube$46dart$58$58_controller$35param) {
      this[___SpinKitFadingCubeState__controller] = library$32package$58flutter_spinkit$47src$47fading_cube$46dart$58$58_controller$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$4] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.repeat();
        return t2$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$4].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Center.new({child: new basic.Transform.rotate({angle: -45 * 0.0174533, child: new basic.Stack.new({children: T.ListOfWidget().generate(4, dart.fn(i => {
                  let _size = this.widget.size * 0.5;
                  let _position = this.widget.size * 0.5;
                  return new basic.Positioned.fill({top: _position, left: _position, child: new basic.Transform.scale({scale: 1.1, origin: new ui.Offset.new(-_size * 0.5, -_size * 0.5), child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(90 * i * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.FadeTransition.new({opacity: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: 0.3 * i}).animate(this[_controller$4]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(_size), child: this[_itemBuilder$3](i)})})})})})});
                }, T.intToPositioned()))})})})})});
    }
    [_itemBuilder$3](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color})});
    }
    static ['_#new#tearOff']() {
      return new fading_cube._SpinKitFadingCubeState.new();
    }
  };
  (fading_cube._SpinKitFadingCubeState.new = function() {
    this[___SpinKitFadingCubeState__controller] = null;
    fading_cube._SpinKitFadingCubeState.__proto__.new.call(this);
    ;
  }).prototype = fading_cube._SpinKitFadingCubeState.prototype;
  dart.addTypeTests(fading_cube._SpinKitFadingCubeState);
  dart.addTypeCaches(fading_cube._SpinKitFadingCubeState);
  dart.setMethodSignature(fading_cube._SpinKitFadingCubeState, () => ({
    __proto__: dart.getMethods(fading_cube._SpinKitFadingCubeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$3]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(fading_cube._SpinKitFadingCubeState, () => ({
    __proto__: dart.getGetters(fading_cube._SpinKitFadingCubeState.__proto__),
    [_controller$4]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(fading_cube._SpinKitFadingCubeState, () => ({
    __proto__: dart.getSetters(fading_cube._SpinKitFadingCubeState.__proto__),
    [_controller$4]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(fading_cube._SpinKitFadingCubeState, I[26]);
  dart.setFieldSignature(fading_cube._SpinKitFadingCubeState, () => ({
    __proto__: dart.getFields(fading_cube._SpinKitFadingCubeState.__proto__),
    [___SpinKitFadingCubeState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var color$7 = dart.privateName(fading_four, "SpinKitFadingFour.color");
  var shape$ = dart.privateName(fading_four, "SpinKitFadingFour.shape");
  var size$7 = dart.privateName(fading_four, "SpinKitFadingFour.size");
  var itemBuilder$6 = dart.privateName(fading_four, "SpinKitFadingFour.itemBuilder");
  var duration$7 = dart.privateName(fading_four, "SpinKitFadingFour.duration");
  var controller$6 = dart.privateName(fading_four, "SpinKitFadingFour.controller");
  fading_four.SpinKitFadingFour = class SpinKitFadingFour extends framework.StatefulWidget {
    get color() {
      return this[color$7];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get size() {
      return this[size$7];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$6];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$7];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$6];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shape = opts && 'shape' in opts ? opts.shape : C[39] || CT.C39;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new fading_four.SpinKitFadingFour.new({key: key, color: color, shape: shape, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new fading_four._SpinKitFadingFourState.new();
    }
  };
  (fading_four.SpinKitFadingFour.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C[39] || CT.C39;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$7] = color;
    this[shape$] = shape;
    this[size$7] = size;
    this[itemBuilder$6] = itemBuilder;
    this[duration$7] = duration;
    this[controller$6] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[27], 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    fading_four.SpinKitFadingFour.__proto__.new.call(this, {key: key});
    ;
  }).prototype = fading_four.SpinKitFadingFour.prototype;
  dart.addTypeTests(fading_four.SpinKitFadingFour);
  dart.addTypeCaches(fading_four.SpinKitFadingFour);
  dart.setMethodSignature(fading_four.SpinKitFadingFour, () => ({
    __proto__: dart.getMethods(fading_four.SpinKitFadingFour.__proto__),
    createState: dart.fnType(fading_four._SpinKitFadingFourState, [])
  }));
  dart.setLibraryUri(fading_four.SpinKitFadingFour, I[28]);
  dart.setFieldSignature(fading_four.SpinKitFadingFour, () => ({
    __proto__: dart.getFields(fading_four.SpinKitFadingFour.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitFadingFourState__controller = dart.privateName(fading_four, "_#_SpinKitFadingFourState#_controller");
  var _controller$5 = dart.privateName(fading_four, "_controller");
  var _itemBuilder$4 = dart.privateName(fading_four, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$5 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_four.SpinKitFadingFour) {};
  (State_SingleTickerProviderStateMixin$36$5.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_four.SpinKitFadingFour)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$5.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$5.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$5, ticker_provider.SingleTickerProviderStateMixin$(fading_four.SpinKitFadingFour));
  fading_four._SpinKitFadingFourState = class _SpinKitFadingFourState extends State_SingleTickerProviderStateMixin$36$5 {
    get [_controller$5]() {
      let t2;
      t2 = this[___SpinKitFadingFourState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$5](library$32package$58flutter_spinkit$47src$47fading_four$46dart$58$58_controller$35param) {
      this[___SpinKitFadingFourState__controller] = library$32package$58flutter_spinkit$47src$47fading_four$46dart$58$58_controller$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$5] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.repeat();
        return t2$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$5].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: T.ListOfWidget().generate(4, dart.fn(i => {
              let _position = this.widget.size * 0.5;
              return new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(30 * (i * 3) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.FadeTransition.new({opacity: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: this.delays[$_get](i)}).animate(this[_controller$5]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.25), child: this[_itemBuilder$4](i)})})})})});
            }, T.intToPositioned()))})})});
    }
    [_itemBuilder$4](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape})});
    }
    static ['_#new#tearOff']() {
      return new fading_four._SpinKitFadingFourState.new();
    }
  };
  (fading_four._SpinKitFadingFourState.new = function() {
    this.delays = T.JSArrayOfdouble().of([0, -0.9, -0.6, -0.3]);
    this[___SpinKitFadingFourState__controller] = null;
    fading_four._SpinKitFadingFourState.__proto__.new.call(this);
    ;
  }).prototype = fading_four._SpinKitFadingFourState.prototype;
  dart.addTypeTests(fading_four._SpinKitFadingFourState);
  dart.addTypeCaches(fading_four._SpinKitFadingFourState);
  dart.setMethodSignature(fading_four._SpinKitFadingFourState, () => ({
    __proto__: dart.getMethods(fading_four._SpinKitFadingFourState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$4]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(fading_four._SpinKitFadingFourState, () => ({
    __proto__: dart.getGetters(fading_four._SpinKitFadingFourState.__proto__),
    [_controller$5]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(fading_four._SpinKitFadingFourState, () => ({
    __proto__: dart.getSetters(fading_four._SpinKitFadingFourState.__proto__),
    [_controller$5]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(fading_four._SpinKitFadingFourState, I[28]);
  dart.setFieldSignature(fading_four._SpinKitFadingFourState, () => ({
    __proto__: dart.getFields(fading_four._SpinKitFadingFourState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [___SpinKitFadingFourState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var color$8 = dart.privateName(fading_grid, "SpinKitFadingGrid.color");
  var shape$0 = dart.privateName(fading_grid, "SpinKitFadingGrid.shape");
  var size$8 = dart.privateName(fading_grid, "SpinKitFadingGrid.size");
  var itemBuilder$7 = dart.privateName(fading_grid, "SpinKitFadingGrid.itemBuilder");
  var duration$8 = dart.privateName(fading_grid, "SpinKitFadingGrid.duration");
  var controller$7 = dart.privateName(fading_grid, "SpinKitFadingGrid.controller");
  fading_grid.SpinKitFadingGrid = class SpinKitFadingGrid extends framework.StatefulWidget {
    get color() {
      return this[color$8];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$0];
    }
    set shape(value) {
      super.shape = value;
    }
    get size() {
      return this[size$8];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$7];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$8];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$7];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shape = opts && 'shape' in opts ? opts.shape : C[39] || CT.C39;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new fading_grid.SpinKitFadingGrid.new({key: key, color: color, shape: shape, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new fading_grid._SpinKitFadingGridState.new();
    }
  };
  (fading_grid.SpinKitFadingGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C[39] || CT.C39;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$8] = color;
    this[shape$0] = shape;
    this[size$8] = size;
    this[itemBuilder$7] = itemBuilder;
    this[duration$8] = duration;
    this[controller$7] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[29], 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    fading_grid.SpinKitFadingGrid.__proto__.new.call(this, {key: key});
    ;
  }).prototype = fading_grid.SpinKitFadingGrid.prototype;
  dart.addTypeTests(fading_grid.SpinKitFadingGrid);
  dart.addTypeCaches(fading_grid.SpinKitFadingGrid);
  dart.setMethodSignature(fading_grid.SpinKitFadingGrid, () => ({
    __proto__: dart.getMethods(fading_grid.SpinKitFadingGrid.__proto__),
    createState: dart.fnType(fading_grid._SpinKitFadingGridState, [])
  }));
  dart.setLibraryUri(fading_grid.SpinKitFadingGrid, I[30]);
  dart.setFieldSignature(fading_grid.SpinKitFadingGrid, () => ({
    __proto__: dart.getFields(fading_grid.SpinKitFadingGrid.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitFadingGridState__controller = dart.privateName(fading_grid, "_#_SpinKitFadingGridState#_controller");
  var _controller$6 = dart.privateName(fading_grid, "_controller");
  var _circle$ = dart.privateName(fading_grid, "_circle");
  var _itemBuilder$5 = dart.privateName(fading_grid, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$6 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_grid.SpinKitFadingGrid) {};
  (State_SingleTickerProviderStateMixin$36$6.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_grid.SpinKitFadingGrid)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$6.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$6.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$6, ticker_provider.SingleTickerProviderStateMixin$(fading_grid.SpinKitFadingGrid));
  fading_grid._SpinKitFadingGridState = class _SpinKitFadingGridState extends State_SingleTickerProviderStateMixin$36$6 {
    get [_controller$6]() {
      let t2;
      t2 = this[___SpinKitFadingGridState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$6](library$32package$58flutter_spinkit$47src$47fading_grid$46dart$58$58_controller$35param) {
      this[___SpinKitFadingGridState__controller] = library$32package$58flutter_spinkit$47src$47fading_grid$46dart$58$58_controller$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$6] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.repeat();
        return t2$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$6].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.max, children: T.JSArrayOfWidget().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([this[_circle$](0, 1), new basic.SizedBox.new({width: this.widget.size / 8}), this[_circle$](1, 1), new basic.SizedBox.new({width: this.widget.size / 8}), this[_circle$](2, 2)])}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new basic.SizedBox.new({height: this.widget.size / 8, width: this.widget.size})])}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([this[_circle$](3, 4), new basic.SizedBox.new({width: this.widget.size / 8}), this[_circle$](4, 1), new basic.SizedBox.new({width: this.widget.size / 8}), this[_circle$](5, 2)])}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new basic.SizedBox.new({height: this.widget.size / 8, width: this.widget.size})])}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([this[_circle$](6, 4), new basic.SizedBox.new({width: this.widget.size / 8}), this[_circle$](7, 3), new basic.SizedBox.new({width: this.widget.size / 8}), this[_circle$](8, 3)])})])})});
    }
    [_circle$](index, i) {
      return new transitions.FadeTransition.new({opacity: new delay_tween.DelayTween.new({begin: 0.4, end: 0.9, delay: 0.3 * (i - 1)}).animate(this[_controller$6]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size / 4), child: this[_itemBuilder$5](index)})});
    }
    [_itemBuilder$5](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape})});
    }
    static ['_#new#tearOff']() {
      return new fading_grid._SpinKitFadingGridState.new();
    }
  };
  (fading_grid._SpinKitFadingGridState.new = function() {
    this[___SpinKitFadingGridState__controller] = null;
    fading_grid._SpinKitFadingGridState.__proto__.new.call(this);
    ;
  }).prototype = fading_grid._SpinKitFadingGridState.prototype;
  dart.addTypeTests(fading_grid._SpinKitFadingGridState);
  dart.addTypeCaches(fading_grid._SpinKitFadingGridState);
  dart.setMethodSignature(fading_grid._SpinKitFadingGridState, () => ({
    __proto__: dart.getMethods(fading_grid._SpinKitFadingGridState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_circle$]: dart.fnType(framework.Widget, [core.int, core.int]),
    [_itemBuilder$5]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(fading_grid._SpinKitFadingGridState, () => ({
    __proto__: dart.getGetters(fading_grid._SpinKitFadingGridState.__proto__),
    [_controller$6]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(fading_grid._SpinKitFadingGridState, () => ({
    __proto__: dart.getSetters(fading_grid._SpinKitFadingGridState.__proto__),
    [_controller$6]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(fading_grid._SpinKitFadingGridState, I[30]);
  dart.setFieldSignature(fading_grid._SpinKitFadingGridState, () => ({
    __proto__: dart.getFields(fading_grid._SpinKitFadingGridState.__proto__),
    [___SpinKitFadingGridState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var color$9 = dart.privateName(folding_cube, "SpinKitFoldingCube.color");
  var size$9 = dart.privateName(folding_cube, "SpinKitFoldingCube.size");
  var itemBuilder$8 = dart.privateName(folding_cube, "SpinKitFoldingCube.itemBuilder");
  var duration$9 = dart.privateName(folding_cube, "SpinKitFoldingCube.duration");
  var controller$8 = dart.privateName(folding_cube, "SpinKitFoldingCube.controller");
  folding_cube.SpinKitFoldingCube = class SpinKitFoldingCube extends framework.StatefulWidget {
    get color() {
      return this[color$9];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$9];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$8];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$9];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$8];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new folding_cube.SpinKitFoldingCube.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new folding_cube._SpinKitFoldingCubeState.new();
    }
  };
  (folding_cube.SpinKitFoldingCube.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$9] = color;
    this[size$9] = size;
    this[itemBuilder$8] = itemBuilder;
    this[duration$9] = duration;
    this[controller$8] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[31], 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    folding_cube.SpinKitFoldingCube.__proto__.new.call(this, {key: key});
    ;
  }).prototype = folding_cube.SpinKitFoldingCube.prototype;
  dart.addTypeTests(folding_cube.SpinKitFoldingCube);
  dart.addTypeCaches(folding_cube.SpinKitFoldingCube);
  dart.setMethodSignature(folding_cube.SpinKitFoldingCube, () => ({
    __proto__: dart.getMethods(folding_cube.SpinKitFoldingCube.__proto__),
    createState: dart.fnType(folding_cube._SpinKitFoldingCubeState, [])
  }));
  dart.setLibraryUri(folding_cube.SpinKitFoldingCube, I[32]);
  dart.setFieldSignature(folding_cube.SpinKitFoldingCube, () => ({
    __proto__: dart.getFields(folding_cube.SpinKitFoldingCube.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitFoldingCubeState_delay = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#delay");
  var ___SpinKitFoldingCubeState__controller1 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_controller1");
  var ___SpinKitFoldingCubeState__controller2 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_controller2");
  var ___SpinKitFoldingCubeState__controller3 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_controller3");
  var ___SpinKitFoldingCubeState__controller4 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_controller4");
  var ___SpinKitFoldingCubeState__rotate1 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_rotate1");
  var ___SpinKitFoldingCubeState__rotate2 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_rotate2");
  var ___SpinKitFoldingCubeState__rotate3 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_rotate3");
  var ___SpinKitFoldingCubeState__rotate4 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_rotate4");
  var ___SpinKitFoldingCubeState__timer2 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_timer2");
  var ___SpinKitFoldingCubeState__timer3 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_timer3");
  var ___SpinKitFoldingCubeState__timer4 = dart.privateName(folding_cube, "_#_SpinKitFoldingCubeState#_timer4");
  var _controller1 = dart.privateName(folding_cube, "_controller1");
  var _controller2 = dart.privateName(folding_cube, "_controller2");
  var _controller3 = dart.privateName(folding_cube, "_controller3");
  var _controller4 = dart.privateName(folding_cube, "_controller4");
  var _rotate1 = dart.privateName(folding_cube, "_rotate1");
  var _rotate2 = dart.privateName(folding_cube, "_rotate2");
  var _rotate3 = dart.privateName(folding_cube, "_rotate3");
  var _rotate4 = dart.privateName(folding_cube, "_rotate4");
  var _timer2 = dart.privateName(folding_cube, "_timer2");
  var _timer3 = dart.privateName(folding_cube, "_timer3");
  var _timer4 = dart.privateName(folding_cube, "_timer4");
  var _cube = dart.privateName(folding_cube, "_cube");
  var _itemBuilder$6 = dart.privateName(folding_cube, "_itemBuilder");
  const State_TickerProviderStateMixin$36$ = class State_TickerProviderStateMixin extends framework.State$(folding_cube.SpinKitFoldingCube) {};
  (State_TickerProviderStateMixin$36$.new = function() {
    ticker_provider.TickerProviderStateMixin$(folding_cube.SpinKitFoldingCube)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$, ticker_provider.TickerProviderStateMixin$(folding_cube.SpinKitFoldingCube));
  folding_cube._SpinKitFoldingCubeState = class _SpinKitFoldingCubeState extends State_TickerProviderStateMixin$36$ {
    get delay() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState_delay];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("delay")) : t2;
    }
    set delay(delay$35param) {
      if (this[___SpinKitFoldingCubeState_delay] == null)
        this[___SpinKitFoldingCubeState_delay] = delay$35param;
      else
        dart.throw(new _internal.LateError.fieldAI("delay"));
    }
    get [_controller1]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__controller1];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller1")) : t2;
    }
    set [_controller1](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_controller1$35param) {
      this[___SpinKitFoldingCubeState__controller1] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_controller1$35param;
    }
    get [_controller2]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__controller2];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller2")) : t2;
    }
    set [_controller2](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_controller2$35param) {
      this[___SpinKitFoldingCubeState__controller2] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_controller2$35param;
    }
    get [_controller3]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__controller3];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller3")) : t2;
    }
    set [_controller3](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_controller3$35param) {
      this[___SpinKitFoldingCubeState__controller3] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_controller3$35param;
    }
    get [_controller4]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__controller4];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller4")) : t2;
    }
    set [_controller4](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_controller4$35param) {
      this[___SpinKitFoldingCubeState__controller4] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_controller4$35param;
    }
    get [_rotate1]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__rotate1];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_rotate1")) : t2;
    }
    set [_rotate1](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_rotate1$35param) {
      this[___SpinKitFoldingCubeState__rotate1] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_rotate1$35param;
    }
    get [_rotate2]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__rotate2];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_rotate2")) : t2;
    }
    set [_rotate2](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_rotate2$35param) {
      this[___SpinKitFoldingCubeState__rotate2] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_rotate2$35param;
    }
    get [_rotate3]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__rotate3];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_rotate3")) : t2;
    }
    set [_rotate3](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_rotate3$35param) {
      this[___SpinKitFoldingCubeState__rotate3] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_rotate3$35param;
    }
    get [_rotate4]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__rotate4];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_rotate4")) : t2;
    }
    set [_rotate4](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_rotate4$35param) {
      this[___SpinKitFoldingCubeState__rotate4] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_rotate4$35param;
    }
    get [_timer2]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__timer2];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_timer2")) : t2;
    }
    set [_timer2](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_timer2$35param) {
      this[___SpinKitFoldingCubeState__timer2] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_timer2$35param;
    }
    get [_timer3]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__timer3];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_timer3")) : t2;
    }
    set [_timer3](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_timer3$35param) {
      this[___SpinKitFoldingCubeState__timer3] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_timer3$35param;
    }
    get [_timer4]() {
      let t2;
      t2 = this[___SpinKitFoldingCubeState__timer4];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_timer4")) : t2;
    }
    set [_timer4](library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_timer4$35param) {
      this[___SpinKitFoldingCubeState__timer4] = library$32package$58flutter_spinkit$47src$47folding_cube$46dart$58$58_timer4$35param;
    }
    initState() {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3;
      super.initState();
      this.delay = (this.widget.duration.inMilliseconds / 8)[$truncate]();
      this[_controller1] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        return t2$;
      })());
      this[_controller2] = (t2$0 = this.widget.controller, t2$0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2$0);
      this[_controller3] = (t2$1 = this.widget.controller, t2$1 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2$1);
      this[_controller4] = (t2$2 = this.widget.controller, t2$2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2$2);
      let tweenSequence = new (T.TweenSequenceOfdouble()).new(T.JSArrayOfTweenSequenceItemOfdouble().of([new (T.TweenSequenceItemOfdouble()).new({tween: new (T.ConstantTweenOfdouble()).new(-180).chain(new tween.CurveTween.new({curve: curves.Curves.easeIn})), weight: 10}), new (T.TweenSequenceItemOfdouble()).new({tween: new (T.TweenOfdouble()).new({begin: -180, end: 0}), weight: 15}), new (T.TweenSequenceItemOfdouble()).new({tween: new (T.ConstantTweenOfdouble()).new(0), weight: 50}), new (T.TweenSequenceItemOfdouble()).new({tween: new (T.TweenOfdouble()).new({begin: 0, end: 180}).chain(new tween.CurveTween.new({curve: curves.Curves.easeIn})), weight: 15}), new (T.TweenSequenceItemOfdouble()).new({tween: new (T.ConstantTweenOfdouble()).new(180), weight: 10})]));
      this[_rotate1] = (t2$3 = tweenSequence.animate(this[_controller1]), (() => {
        t2$3.addStatusListener(dart.fn(status => {
          if (status === animation.AnimationStatus.completed) {
            this.startAnimation();
          }
        }, T.AnimationStatusTovoid()));
        return t2$3;
      })());
      this[_rotate2] = tweenSequence.animate(this[_controller2]);
      this[_rotate3] = tweenSequence.animate(this[_controller3]);
      this[_rotate4] = tweenSequence.animate(this[_controller4]);
      this.startAnimation();
    }
    startAnimation() {
      if (this.mounted) {
        this[_controller1].forward({from: 0});
      }
      this[_timer2] = async.Timer.new(new core.Duration.new({milliseconds: this.delay}), dart.fn(() => {
        if (this.mounted) {
          this[_controller2].forward({from: 0});
        }
      }, T.VoidTovoid()));
      this[_timer3] = async.Timer.new(new core.Duration.new({milliseconds: this.delay * 2}), dart.fn(() => {
        if (this.mounted) {
          this[_controller3].forward({from: 0});
        }
      }, T.VoidTovoid()));
      this[_timer4] = async.Timer.new(new core.Duration.new({milliseconds: this.delay * 3}), dart.fn(() => {
        if (this.mounted) {
          this[_controller4].forward({from: 0});
        }
      }, T.VoidTovoid()));
    }
    dispose() {
      this[_timer2].cancel();
      this[_timer3].cancel();
      this[_timer4].cancel();
      if (this.widget.controller == null) {
        this[_controller1].dispose();
        this[_controller2].dispose();
        this[_controller3].dispose();
        this[_controller4].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Center.new({child: new basic.Transform.rotate({angle: -45 * 0.0174533, child: new basic.Stack.new({children: T.JSArrayOfWidget().of([this[_cube](1, {animation: this[_rotate2]}), this[_cube](2, {animation: this[_rotate3]}), this[_cube](3, {animation: this[_rotate4]}), this[_cube](4, {animation: this[_rotate1]})])})})})})});
    }
    [_cube](i, opts) {
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let _size = this.widget.size * 0.5;
      let _position = this.widget.size * 0.5;
      let _tRotate = vector_math_64.Matrix4.identity();
      if (animation.value <= 0) {
        _tRotate.rotateX(animation.value * 0.0174533);
      } else {
        _tRotate.rotateY(animation.value * 0.0174533);
      }
      return new basic.Positioned.fill({top: _position, left: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(90 * (i - 1) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new basic.Transform.new({transform: _tRotate, alignment: animation.value <= 0 ? alignment.Alignment.topCenter : alignment.Alignment.centerLeft, child: new basic.Opacity.new({opacity: 1 - animation.value[$abs]() / 180, child: new basic.SizedBox.fromSize({size: new ui.Size.square(_size), child: this[_itemBuilder$6](i - 1)})})})})})});
    }
    [_itemBuilder$6](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color})});
    }
    static ['_#new#tearOff']() {
      return new folding_cube._SpinKitFoldingCubeState.new();
    }
  };
  (folding_cube._SpinKitFoldingCubeState.new = function() {
    this[___SpinKitFoldingCubeState_delay] = null;
    this[___SpinKitFoldingCubeState__controller1] = null;
    this[___SpinKitFoldingCubeState__controller2] = null;
    this[___SpinKitFoldingCubeState__controller3] = null;
    this[___SpinKitFoldingCubeState__controller4] = null;
    this[___SpinKitFoldingCubeState__rotate1] = null;
    this[___SpinKitFoldingCubeState__rotate2] = null;
    this[___SpinKitFoldingCubeState__rotate3] = null;
    this[___SpinKitFoldingCubeState__rotate4] = null;
    this[___SpinKitFoldingCubeState__timer2] = null;
    this[___SpinKitFoldingCubeState__timer3] = null;
    this[___SpinKitFoldingCubeState__timer4] = null;
    folding_cube._SpinKitFoldingCubeState.__proto__.new.call(this);
    ;
  }).prototype = folding_cube._SpinKitFoldingCubeState.prototype;
  dart.addTypeTests(folding_cube._SpinKitFoldingCubeState);
  dart.addTypeCaches(folding_cube._SpinKitFoldingCubeState);
  dart.setMethodSignature(folding_cube._SpinKitFoldingCubeState, () => ({
    __proto__: dart.getMethods(folding_cube._SpinKitFoldingCubeState.__proto__),
    startAnimation: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_cube]: dart.fnType(framework.Widget, [core.int], {}, {animation: animation.Animation$(core.double)}),
    [_itemBuilder$6]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(folding_cube._SpinKitFoldingCubeState, () => ({
    __proto__: dart.getGetters(folding_cube._SpinKitFoldingCubeState.__proto__),
    delay: core.int,
    [_controller1]: animation_controller.AnimationController,
    [_controller2]: animation_controller.AnimationController,
    [_controller3]: animation_controller.AnimationController,
    [_controller4]: animation_controller.AnimationController,
    [_rotate1]: animation.Animation$(core.double),
    [_rotate2]: animation.Animation$(core.double),
    [_rotate3]: animation.Animation$(core.double),
    [_rotate4]: animation.Animation$(core.double),
    [_timer2]: async.Timer,
    [_timer3]: async.Timer,
    [_timer4]: async.Timer
  }));
  dart.setSetterSignature(folding_cube._SpinKitFoldingCubeState, () => ({
    __proto__: dart.getSetters(folding_cube._SpinKitFoldingCubeState.__proto__),
    delay: core.int,
    [_controller1]: animation_controller.AnimationController,
    [_controller2]: animation_controller.AnimationController,
    [_controller3]: animation_controller.AnimationController,
    [_controller4]: animation_controller.AnimationController,
    [_rotate1]: animation.Animation$(core.double),
    [_rotate2]: animation.Animation$(core.double),
    [_rotate3]: animation.Animation$(core.double),
    [_rotate4]: animation.Animation$(core.double),
    [_timer2]: async.Timer,
    [_timer3]: async.Timer,
    [_timer4]: async.Timer
  }));
  dart.setLibraryUri(folding_cube._SpinKitFoldingCubeState, I[32]);
  dart.setFieldSignature(folding_cube._SpinKitFoldingCubeState, () => ({
    __proto__: dart.getFields(folding_cube._SpinKitFoldingCubeState.__proto__),
    [___SpinKitFoldingCubeState_delay]: dart.fieldType(dart.nullable(core.int)),
    [___SpinKitFoldingCubeState__controller1]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitFoldingCubeState__controller2]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitFoldingCubeState__controller3]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitFoldingCubeState__controller4]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitFoldingCubeState__rotate1]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitFoldingCubeState__rotate2]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitFoldingCubeState__rotate3]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitFoldingCubeState__rotate4]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitFoldingCubeState__timer2]: dart.fieldType(dart.nullable(async.Timer)),
    [___SpinKitFoldingCubeState__timer3]: dart.fieldType(dart.nullable(async.Timer)),
    [___SpinKitFoldingCubeState__timer4]: dart.fieldType(dart.nullable(async.Timer))
  }));
  var color$10 = dart.privateName(hour_glass, "SpinKitHourGlass.color");
  var size$10 = dart.privateName(hour_glass, "SpinKitHourGlass.size");
  var duration$10 = dart.privateName(hour_glass, "SpinKitHourGlass.duration");
  var controller$9 = dart.privateName(hour_glass, "SpinKitHourGlass.controller");
  hour_glass.SpinKitHourGlass = class SpinKitHourGlass extends framework.StatefulWidget {
    get color() {
      return this[color$10];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$10];
    }
    set size(value) {
      super.size = value;
    }
    get duration() {
      return this[duration$10];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$9];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new hour_glass.SpinKitHourGlass.new({key: key, color: color, size: size, duration: duration, controller: controller});
    }
    createState() {
      return new hour_glass._SpinKitHourGlassState.new();
    }
  };
  (hour_glass.SpinKitHourGlass.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$10] = color;
    this[size$10] = size;
    this[duration$10] = duration;
    this[controller$9] = controller;
    hour_glass.SpinKitHourGlass.__proto__.new.call(this, {key: key});
    ;
  }).prototype = hour_glass.SpinKitHourGlass.prototype;
  dart.addTypeTests(hour_glass.SpinKitHourGlass);
  dart.addTypeCaches(hour_glass.SpinKitHourGlass);
  dart.setMethodSignature(hour_glass.SpinKitHourGlass, () => ({
    __proto__: dart.getMethods(hour_glass.SpinKitHourGlass.__proto__),
    createState: dart.fnType(hour_glass._SpinKitHourGlassState, [])
  }));
  dart.setLibraryUri(hour_glass.SpinKitHourGlass, I[33]);
  dart.setFieldSignature(hour_glass.SpinKitHourGlass, () => ({
    __proto__: dart.getFields(hour_glass.SpinKitHourGlass.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitHourGlassState__controller = dart.privateName(hour_glass, "_#_SpinKitHourGlassState#_controller");
  var ___SpinKitHourGlassState__animation = dart.privateName(hour_glass, "_#_SpinKitHourGlassState#_animation");
  var _controller$7 = dart.privateName(hour_glass, "_controller");
  var _animation$0 = dart.privateName(hour_glass, "_animation");
  const State_SingleTickerProviderStateMixin$36$7 = class State_SingleTickerProviderStateMixin extends framework.State$(hour_glass.SpinKitHourGlass) {};
  (State_SingleTickerProviderStateMixin$36$7.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(hour_glass.SpinKitHourGlass)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$7.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$7.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$7, ticker_provider.SingleTickerProviderStateMixin$(hour_glass.SpinKitHourGlass));
  hour_glass._SpinKitHourGlassState = class _SpinKitHourGlassState extends State_SingleTickerProviderStateMixin$36$7 {
    get [_controller$7]() {
      let t2;
      t2 = this[___SpinKitHourGlassState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$7](library$32package$58flutter_spinkit$47src$47hour_glass$46dart$58$58_controller$35param) {
      this[___SpinKitHourGlassState__controller] = library$32package$58flutter_spinkit$47src$47hour_glass$46dart$58$58_controller$35param;
    }
    get [_animation$0]() {
      let t2;
      t2 = this[___SpinKitHourGlassState__animation];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_animation")) : t2;
    }
    set [_animation$0](library$32package$58flutter_spinkit$47src$47hour_glass$46dart$58$58_animation$35param) {
      this[___SpinKitHourGlassState__animation] = library$32package$58flutter_spinkit$47src$47hour_glass$46dart$58$58_animation$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$7] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t2$.repeat();
        return t2$;
      })());
      this[_animation$0] = new (T.TweenOfdouble()).new({begin: 0, end: 8}).animate(new animations.CurvedAnimation.new({parent: this[_controller$7], curve: C[40] || CT.C40}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$7].dispose();
      }
      super.dispose();
    }
    build(context) {
      let t2;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t2 = vector_math_64.Matrix4.identity(), (() => {
            t2.rotateZ(this[_animation$0].value * 3.141592653589793);
            return t2;
          })()), alignment: fractional_offset.FractionalOffset.center, child: new basic.CustomPaint.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size)}), painter: new hour_glass._HourGlassPainter.new({color: this.widget.color})})})});
    }
    static ['_#new#tearOff']() {
      return new hour_glass._SpinKitHourGlassState.new();
    }
  };
  (hour_glass._SpinKitHourGlassState.new = function() {
    this[___SpinKitHourGlassState__controller] = null;
    this[___SpinKitHourGlassState__animation] = null;
    hour_glass._SpinKitHourGlassState.__proto__.new.call(this);
    ;
  }).prototype = hour_glass._SpinKitHourGlassState.prototype;
  dart.addTypeTests(hour_glass._SpinKitHourGlassState);
  dart.addTypeCaches(hour_glass._SpinKitHourGlassState);
  dart.setMethodSignature(hour_glass._SpinKitHourGlassState, () => ({
    __proto__: dart.getMethods(hour_glass._SpinKitHourGlassState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(hour_glass._SpinKitHourGlassState, () => ({
    __proto__: dart.getGetters(hour_glass._SpinKitHourGlassState.__proto__),
    [_controller$7]: animation_controller.AnimationController,
    [_animation$0]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(hour_glass._SpinKitHourGlassState, () => ({
    __proto__: dart.getSetters(hour_glass._SpinKitHourGlassState.__proto__),
    [_controller$7]: animation_controller.AnimationController,
    [_animation$0]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(hour_glass._SpinKitHourGlassState, I[33]);
  dart.setFieldSignature(hour_glass._SpinKitHourGlassState, () => ({
    __proto__: dart.getFields(hour_glass._SpinKitHourGlassState.__proto__),
    [___SpinKitHourGlassState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitHourGlassState__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var _paint = dart.privateName(hour_glass, "_paint");
  hour_glass._HourGlassPainter = class _HourGlassPainter extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](opts) {
      let weight = opts && 'weight' in opts ? opts.weight : 90;
      let color = opts && 'color' in opts ? opts.color : null;
      return new hour_glass._HourGlassPainter.new({weight: weight, color: color});
    }
    paint(canvas, size) {
      let rect = new ui.Rect.fromPoints(ui.Offset.zero, new ui.Offset.new(size.width, size.height));
      canvas.drawArc(rect, 0, this.getRadian(this.weight), true, this[_paint]);
      canvas.drawArc(rect, this.getRadian(180), this.getRadian(this.weight), true, this[_paint]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return true;
    }
    getRadian(angle) {
      return 3.141592653589793 / 180 * angle;
    }
  };
  (hour_glass._HourGlassPainter.new = function(opts) {
    let t2;
    let weight = opts && 'weight' in opts ? opts.weight : 90;
    let color = opts && 'color' in opts ? opts.color : null;
    this.weight = weight;
    this[_paint] = (t2 = ui.Paint.new(), (() => {
      t2.color = color;
      t2.strokeWidth = 1;
      return t2;
    })());
    hour_glass._HourGlassPainter.__proto__.new.call(this);
    ;
  }).prototype = hour_glass._HourGlassPainter.prototype;
  dart.addTypeTests(hour_glass._HourGlassPainter);
  dart.addTypeCaches(hour_glass._HourGlassPainter);
  dart.setMethodSignature(hour_glass._HourGlassPainter, () => ({
    __proto__: dart.getMethods(hour_glass._HourGlassPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    getRadian: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(hour_glass._HourGlassPainter, I[33]);
  dart.setFieldSignature(hour_glass._HourGlassPainter, () => ({
    __proto__: dart.getFields(hour_glass._HourGlassPainter.__proto__),
    [_paint]: dart.finalFieldType(ui.Paint),
    weight: dart.finalFieldType(core.double)
  }));
  var _name = dart.privateName(core, "_name");
  piano_wave.SpinKitPianoWaveType = class SpinKitPianoWaveType extends core._Enum {
    toString() {
      return "SpinKitPianoWaveType." + this[_name];
    }
  };
  (piano_wave.SpinKitPianoWaveType.new = function(index, name) {
    piano_wave.SpinKitPianoWaveType.__proto__.new.call(this, index, name);
    ;
  }).prototype = piano_wave.SpinKitPianoWaveType.prototype;
  dart.addTypeTests(piano_wave.SpinKitPianoWaveType);
  dart.addTypeCaches(piano_wave.SpinKitPianoWaveType);
  dart.setLibraryUri(piano_wave.SpinKitPianoWaveType, I[34]);
  dart.setStaticFieldSignature(piano_wave.SpinKitPianoWaveType, () => ['values', 'start', 'end', 'center']);
  dart.defineExtensionMethods(piano_wave.SpinKitPianoWaveType, ['toString']);
  dart.defineLazy(piano_wave.SpinKitPianoWaveType, {
    /*piano_wave.SpinKitPianoWaveType.values*/get values() {
      return C[42] || CT.C42;
    },
    /*piano_wave.SpinKitPianoWaveType.start*/get start() {
      return C[43] || CT.C43;
    },
    /*piano_wave.SpinKitPianoWaveType.end*/get end() {
      return C[44] || CT.C44;
    },
    /*piano_wave.SpinKitPianoWaveType.center*/get center() {
      return C[45] || CT.C45;
    }
  }, false);
  var color$11 = dart.privateName(piano_wave, "SpinKitPianoWave.color");
  var itemCount$ = dart.privateName(piano_wave, "SpinKitPianoWave.itemCount");
  var size$11 = dart.privateName(piano_wave, "SpinKitPianoWave.size");
  var type$ = dart.privateName(piano_wave, "SpinKitPianoWave.type");
  var itemBuilder$9 = dart.privateName(piano_wave, "SpinKitPianoWave.itemBuilder");
  var duration$11 = dart.privateName(piano_wave, "SpinKitPianoWave.duration");
  var controller$10 = dart.privateName(piano_wave, "SpinKitPianoWave.controller");
  piano_wave.SpinKitPianoWave = class SpinKitPianoWave extends framework.StatefulWidget {
    get color() {
      return this[color$11];
    }
    set color(value) {
      super.color = value;
    }
    get itemCount() {
      return this[itemCount$];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get size() {
      return this[size$11];
    }
    set size(value) {
      super.size = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get itemBuilder() {
      return this[itemBuilder$9];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$11];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$10];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let type = opts && 'type' in opts ? opts.type : C[43] || CT.C43;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : 5;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new piano_wave.SpinKitPianoWave.new({key: key, color: color, type: type, size: size, itemBuilder: itemBuilder, itemCount: itemCount, duration: duration, controller: controller});
    }
    createState() {
      return new piano_wave._SpinKitPianoWaveState.new();
    }
  };
  (piano_wave.SpinKitPianoWave.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let type = opts && 'type' in opts ? opts.type : C[43] || CT.C43;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : 5;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$11] = color;
    this[type$] = type;
    this[size$11] = size;
    this[itemBuilder$9] = itemBuilder;
    this[itemCount$] = itemCount;
    this[duration$11] = duration;
    this[controller$10] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[35], 17, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(itemCount >= 2)) dart.assertFailed("itemCount Cant be less then 2 ", I[35], 19, 16, "itemCount >= 2");
    piano_wave.SpinKitPianoWave.__proto__.new.call(this, {key: key});
    ;
  }).prototype = piano_wave.SpinKitPianoWave.prototype;
  dart.addTypeTests(piano_wave.SpinKitPianoWave);
  dart.addTypeCaches(piano_wave.SpinKitPianoWave);
  dart.setMethodSignature(piano_wave.SpinKitPianoWave, () => ({
    __proto__: dart.getMethods(piano_wave.SpinKitPianoWave.__proto__),
    createState: dart.fnType(piano_wave._SpinKitPianoWaveState, [])
  }));
  dart.setLibraryUri(piano_wave.SpinKitPianoWave, I[34]);
  dart.setFieldSignature(piano_wave.SpinKitPianoWave, () => ({
    __proto__: dart.getFields(piano_wave.SpinKitPianoWave.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    itemCount: dart.finalFieldType(core.int),
    size: dart.finalFieldType(core.double),
    type: dart.finalFieldType(piano_wave.SpinKitPianoWaveType),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitPianoWaveState__controller = dart.privateName(piano_wave, "_#_SpinKitPianoWaveState#_controller");
  var _controller$8 = dart.privateName(piano_wave, "_controller");
  var _itemBuilder$7 = dart.privateName(piano_wave, "_itemBuilder");
  var _startAnimationDelay = dart.privateName(piano_wave, "_startAnimationDelay");
  var _endAnimationDelay = dart.privateName(piano_wave, "_endAnimationDelay");
  var _centerAnimationDelay = dart.privateName(piano_wave, "_centerAnimationDelay");
  const State_SingleTickerProviderStateMixin$36$8 = class State_SingleTickerProviderStateMixin extends framework.State$(piano_wave.SpinKitPianoWave) {};
  (State_SingleTickerProviderStateMixin$36$8.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(piano_wave.SpinKitPianoWave)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$8.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$8.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$8, ticker_provider.SingleTickerProviderStateMixin$(piano_wave.SpinKitPianoWave));
  piano_wave._SpinKitPianoWaveState = class _SpinKitPianoWaveState extends State_SingleTickerProviderStateMixin$36$8 {
    get [_controller$8]() {
      let t2;
      t2 = this[___SpinKitPianoWaveState__controller];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t2;
    }
    set [_controller$8](library$32package$58flutter_spinkit$47src$47piano_wave$46dart$58$58_controller$35param) {
      this[___SpinKitPianoWaveState__controller] = library$32package$58flutter_spinkit$47src$47piano_wave$46dart$58$58_controller$35param;
    }
    initState() {
      let t2, t2$;
      super.initState();
      this[_controller$8] = (t2$ = (t2 = this.widget.controller, t2 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t2), (() => {
        t2$.repeat();
        return t2$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$8].dispose();
      }
      super.dispose();
    }
    build(context) {
      let _bars = this.getAnimationDelay(this.widget.itemCount);
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.new(this.widget.size * 1.25, this.widget.size), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.ListOfWidget().generate(_bars[$length], dart.fn(i => new piano_wave.DottedScaleXWidget.new({scaleX: new delay_tween.DelayTween.new({begin: 0.4, end: 1, delay: _bars[$_get](i)}).animate(this[_controller$8]), child: new basic.SizedBox.fromSize({size: new ui.Size.new(this.widget.size / this.widget.itemCount, this.widget.size), child: this[_itemBuilder$7](i)})}), T.intToDottedScaleXWidget()))})})});
    }
    getAnimationDelay(itemCount) {
      switch (this.widget.type) {
        case C[43] || CT.C43:
          {
            return this[_startAnimationDelay](itemCount);
          }
        case C[44] || CT.C44:
          {
            return this[_endAnimationDelay](itemCount);
          }
        case C[45] || CT.C45:
        default:
          {
            return this[_centerAnimationDelay](itemCount);
          }
      }
    }
    [_startAnimationDelay](count) {
      return (() => {
        let t2 = T.ListOfdouble().of(T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 - index * 0.1 - 0.1, T.intTodouble()))[$reversed]);
        if (count[$isOdd]) t2.push(-1);
        t2[$addAll](T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 + index * 0.1 + (count[$isOdd] ? 0.1 : 0), T.intTodouble())));
        return t2;
      })();
    }
    [_endAnimationDelay](count) {
      return (() => {
        let t3 = T.ListOfdouble().of(T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 + index * 0.1 + 0.1, T.intTodouble()))[$reversed]);
        if (count[$isOdd]) t3.push(-1);
        t3[$addAll](T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 - index * 0.1 - (count[$isOdd] ? 0.1 : 0), T.intTodouble())));
        return t3;
      })();
    }
    [_centerAnimationDelay](count) {
      return (() => {
        let t4 = T.ListOfdouble().of(T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 + index * 0.2 + 0.2, T.intTodouble()))[$reversed]);
        if (count[$isOdd]) t4.push(-1);
        t4[$addAll](T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 + index * 0.2 + 0.2, T.intTodouble())));
        return t4;
      })();
    }
    [_itemBuilder$7](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color})});
    }
    static ['_#new#tearOff']() {
      return new piano_wave._SpinKitPianoWaveState.new();
    }
  };
  (piano_wave._SpinKitPianoWaveState.new = function() {
    this[___SpinKitPianoWaveState__controller] = null;
    piano_wave._SpinKitPianoWaveState.__proto__.new.call(this);
    ;
  }).prototype = piano_wave._SpinKitPianoWaveState.prototype;
  dart.addTypeTests(piano_wave._SpinKitPianoWaveState);
  dart.addTypeCaches(piano_wave._SpinKitPianoWaveState);
  dart.setMethodSignature(piano_wave._SpinKitPianoWaveState, () => ({
    __proto__: dart.getMethods(piano_wave._SpinKitPianoWaveState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getAnimationDelay: dart.fnType(core.List$(core.double), [core.int]),
    [_startAnimationDelay]: dart.fnType(core.List$(core.double), [core.int]),
    [_endAnimationDelay]: dart.fnType(core.List$(core.double), [core.int]),
    [_centerAnimationDelay]: dart.fnType(core.List$(core.double), [core.int]),
    [_itemBuilder$7]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(piano_wave._SpinKitPianoWaveState, () => ({
    __proto__: dart.getGetters(piano_wave._SpinKitPianoWaveState.__proto__),
    [_controller$8]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(piano_wave._SpinKitPianoWaveState, () => ({
    __proto__: dart.getSetters(piano_wave._SpinKitPianoWaveState.__proto__),
    [_controller$8]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(piano_wave._SpinKitPianoWaveState, I[34]);
  dart.setFieldSignature(piano_wave._SpinKitPianoWaveState, () => ({
    __proto__: dart.getFields(piano_wave._SpinKitPianoWaveState.__proto__),
    [___SpinKitPianoWaveState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var child$ = dart.privateName(piano_wave, "DottedScaleXWidget.child");
  var alignment$ = dart.privateName(piano_wave, "DottedScaleXWidget.alignment");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  piano_wave.DottedScaleXWidget = class DottedScaleXWidget extends transitions.AnimatedWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scaleX = opts && 'scaleX' in opts ? opts.scaleX : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[46] || CT.C46;
      return new piano_wave.DottedScaleXWidget.new({key: key, scaleX: scaleX, child: child, alignment: alignment});
    }
    get scale() {
      return T.AnimationOfdouble().as(this.listenable);
    }
    build(context) {
      let t5;
      return new basic.Transform.new({transform: (t5 = vector_math_64.Matrix4.identity(), (() => {
          t5.scale(this.scale.value * 0.8, 1, 1);
          return t5;
        })()), alignment: this.alignment, child: this.child});
    }
  };
  (piano_wave.DottedScaleXWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scaleX = opts && 'scaleX' in opts ? opts.scaleX : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[46] || CT.C46;
    this[child$] = child;
    this[alignment$] = alignment;
    piano_wave.DottedScaleXWidget.__proto__.new.call(this, {key: key, listenable: scaleX});
    ;
  }).prototype = piano_wave.DottedScaleXWidget.prototype;
  dart.addTypeTests(piano_wave.DottedScaleXWidget);
  dart.addTypeCaches(piano_wave.DottedScaleXWidget);
  dart.setMethodSignature(piano_wave.DottedScaleXWidget, () => ({
    __proto__: dart.getMethods(piano_wave.DottedScaleXWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(piano_wave.DottedScaleXWidget, () => ({
    __proto__: dart.getGetters(piano_wave.DottedScaleXWidget.__proto__),
    scale: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(piano_wave.DottedScaleXWidget, I[34]);
  dart.setFieldSignature(piano_wave.DottedScaleXWidget, () => ({
    __proto__: dart.getFields(piano_wave.DottedScaleXWidget.__proto__),
    child: dart.finalFieldType(framework.Widget),
    alignment: dart.finalFieldType(alignment.Alignment)
  }));
  var size$12 = dart.privateName(pouring_hour_glass, "SpinKitPouringHourGlass.size");
  var color$12 = dart.privateName(pouring_hour_glass, "SpinKitPouringHourGlass.color");
  var duration$12 = dart.privateName(pouring_hour_glass, "SpinKitPouringHourGlass.duration");
  var strokeWidth$ = dart.privateName(pouring_hour_glass, "SpinKitPouringHourGlass.strokeWidth");
  var controller$11 = dart.privateName(pouring_hour_glass, "SpinKitPouringHourGlass.controller");
  pouring_hour_glass.SpinKitPouringHourGlass = class SpinKitPouringHourGlass extends framework.StatefulWidget {
    get size() {
      return this[size$12];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$12];
    }
    set color(value) {
      super.color = value;
    }
    get duration() {
      return this[duration$12];
    }
    set duration(value) {
      super.duration = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    get controller() {
      return this[controller$11];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new pouring_hour_glass.SpinKitPouringHourGlass.new({key: key, color: color, size: size, duration: duration, strokeWidth: strokeWidth, controller: controller});
    }
    createState() {
      return new pouring_hour_glass._SpinKitPouringHourGlassState.new();
    }
  };
  (pouring_hour_glass.SpinKitPouringHourGlass.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$12] = color;
    this[size$12] = size;
    this[duration$12] = duration;
    this[strokeWidth$] = strokeWidth;
    this[controller$11] = controller;
    pouring_hour_glass.SpinKitPouringHourGlass.__proto__.new.call(this, {key: key});
    ;
  }).prototype = pouring_hour_glass.SpinKitPouringHourGlass.prototype;
  dart.addTypeTests(pouring_hour_glass.SpinKitPouringHourGlass);
  dart.addTypeCaches(pouring_hour_glass.SpinKitPouringHourGlass);
  dart.setMethodSignature(pouring_hour_glass.SpinKitPouringHourGlass, () => ({
    __proto__: dart.getMethods(pouring_hour_glass.SpinKitPouringHourGlass.__proto__),
    createState: dart.fnType(pouring_hour_glass._SpinKitPouringHourGlassState, [])
  }));
  dart.setLibraryUri(pouring_hour_glass.SpinKitPouringHourGlass, I[36]);
  dart.setFieldSignature(pouring_hour_glass.SpinKitPouringHourGlass, () => ({
    __proto__: dart.getFields(pouring_hour_glass.SpinKitPouringHourGlass.__proto__),
    size: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    duration: dart.finalFieldType(core.Duration),
    strokeWidth: dart.finalFieldType(dart.nullable(core.double)),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitPouringHourGlassState__controller = dart.privateName(pouring_hour_glass, "_#_SpinKitPouringHourGlassState#_controller");
  var ___SpinKitPouringHourGlassState__pouringAnimation = dart.privateName(pouring_hour_glass, "_#_SpinKitPouringHourGlassState#_pouringAnimation");
  var ___SpinKitPouringHourGlassState__rotationAnimation = dart.privateName(pouring_hour_glass, "_#_SpinKitPouringHourGlassState#_rotationAnimation");
  var _controller$9 = dart.privateName(pouring_hour_glass, "_controller");
  var _pouringAnimation = dart.privateName(pouring_hour_glass, "_pouringAnimation");
  var _rotationAnimation = dart.privateName(pouring_hour_glass, "_rotationAnimation");
  const State_SingleTickerProviderStateMixin$36$9 = class State_SingleTickerProviderStateMixin extends framework.State$(pouring_hour_glass.SpinKitPouringHourGlass) {};
  (State_SingleTickerProviderStateMixin$36$9.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pouring_hour_glass.SpinKitPouringHourGlass)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$9.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$9.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$9, ticker_provider.SingleTickerProviderStateMixin$(pouring_hour_glass.SpinKitPouringHourGlass));
  pouring_hour_glass._SpinKitPouringHourGlassState = class _SpinKitPouringHourGlassState extends State_SingleTickerProviderStateMixin$36$9 {
    get [_controller$9]() {
      let t5;
      t5 = this[___SpinKitPouringHourGlassState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$9](library$32package$58flutter_spinkit$47src$47pouring_hour_glass$46dart$58$58_controller$35param) {
      this[___SpinKitPouringHourGlassState__controller] = library$32package$58flutter_spinkit$47src$47pouring_hour_glass$46dart$58$58_controller$35param;
    }
    get [_pouringAnimation]() {
      let t5;
      t5 = this[___SpinKitPouringHourGlassState__pouringAnimation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_pouringAnimation")) : t5;
    }
    set [_pouringAnimation](library$32package$58flutter_spinkit$47src$47pouring_hour_glass$46dart$58$58_pouringAnimation$35param) {
      this[___SpinKitPouringHourGlassState__pouringAnimation] = library$32package$58flutter_spinkit$47src$47pouring_hour_glass$46dart$58$58_pouringAnimation$35param;
    }
    get [_rotationAnimation]() {
      let t5;
      t5 = this[___SpinKitPouringHourGlassState__rotationAnimation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_rotationAnimation")) : t5;
    }
    set [_rotationAnimation](library$32package$58flutter_spinkit$47src$47pouring_hour_glass$46dart$58$58_rotationAnimation$35param) {
      this[___SpinKitPouringHourGlassState__rotationAnimation] = library$32package$58flutter_spinkit$47src$47pouring_hour_glass$46dart$58$58_rotationAnimation$35param;
    }
    initState() {
      let t5, t5$, t5$0;
      super.initState();
      this[_controller$9] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_pouringAnimation] = (t5$0 = new animations.CurvedAnimation.new({parent: this[_controller$9], curve: C[47] || CT.C47}), (() => {
        t5$0.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        return t5$0;
      })());
      this[_rotationAnimation] = new (T.TweenOfdouble()).new({begin: 0, end: 0.5}).animate(new animations.CurvedAnimation.new({parent: this[_controller$9], curve: C[48] || CT.C48}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$9].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new transitions.RotationTransition.new({turns: this[_rotationAnimation], child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.7071067811865476), child: new basic.CustomPaint.new({painter: new pouring_hour_glass._HourGlassPaint.new({poured: this[_pouringAnimation].value, color: this.widget.color, strokeWidth: this.widget.strokeWidth})})})})});
    }
    static ['_#new#tearOff']() {
      return new pouring_hour_glass._SpinKitPouringHourGlassState.new();
    }
  };
  (pouring_hour_glass._SpinKitPouringHourGlassState.new = function() {
    this[___SpinKitPouringHourGlassState__controller] = null;
    this[___SpinKitPouringHourGlassState__pouringAnimation] = null;
    this[___SpinKitPouringHourGlassState__rotationAnimation] = null;
    pouring_hour_glass._SpinKitPouringHourGlassState.__proto__.new.call(this);
    ;
  }).prototype = pouring_hour_glass._SpinKitPouringHourGlassState.prototype;
  dart.addTypeTests(pouring_hour_glass._SpinKitPouringHourGlassState);
  dart.addTypeCaches(pouring_hour_glass._SpinKitPouringHourGlassState);
  dart.setMethodSignature(pouring_hour_glass._SpinKitPouringHourGlassState, () => ({
    __proto__: dart.getMethods(pouring_hour_glass._SpinKitPouringHourGlassState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(pouring_hour_glass._SpinKitPouringHourGlassState, () => ({
    __proto__: dart.getGetters(pouring_hour_glass._SpinKitPouringHourGlassState.__proto__),
    [_controller$9]: animation_controller.AnimationController,
    [_pouringAnimation]: animation.Animation$(core.double),
    [_rotationAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(pouring_hour_glass._SpinKitPouringHourGlassState, () => ({
    __proto__: dart.getSetters(pouring_hour_glass._SpinKitPouringHourGlassState.__proto__),
    [_controller$9]: animation_controller.AnimationController,
    [_pouringAnimation]: animation.Animation$(core.double),
    [_rotationAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(pouring_hour_glass._SpinKitPouringHourGlassState, I[36]);
  dart.setFieldSignature(pouring_hour_glass._SpinKitPouringHourGlassState, () => ({
    __proto__: dart.getFields(pouring_hour_glass._SpinKitPouringHourGlassState.__proto__),
    [___SpinKitPouringHourGlassState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitPouringHourGlassState__pouringAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitPouringHourGlassState__rotationAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var _paint$ = dart.privateName(pouring_hour_glass, "_paint");
  var _powderPaint = dart.privateName(pouring_hour_glass, "_powderPaint");
  pouring_hour_glass._HourGlassPaint = class _HourGlassPaint extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](opts) {
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      let poured = opts && 'poured' in opts ? opts.poured : null;
      let color = opts && 'color' in opts ? opts.color : null;
      return new pouring_hour_glass._HourGlassPaint.new({strokeWidth: strokeWidth, poured: poured, color: color});
    }
    paint(canvas, size) {
      let t5, t5$, t5$0, t5$1, t5$2;
      let centerX = size.width / 2;
      let halfHeight = size.height / 2;
      let hourglassWidth = math.min(core.double, centerX * 0.8, halfHeight);
      let gapWidth = math.max(core.double, 3, hourglassWidth * 0.05);
      let yPadding = gapWidth / 2;
      let top = yPadding;
      let bottom = size.height - yPadding;
      this[_paint$].strokeWidth = (t5 = this.strokeWidth, t5 == null ? gapWidth : t5);
      let hourglassPath = (t5$ = ui.Path.new(), (() => {
        t5$.moveTo(centerX - hourglassWidth, top);
        t5$.lineTo(centerX + hourglassWidth, top);
        t5$.lineTo(centerX + gapWidth, halfHeight);
        t5$.lineTo(centerX + hourglassWidth, bottom);
        t5$.lineTo(centerX - hourglassWidth, bottom);
        t5$.lineTo(centerX - gapWidth, halfHeight);
        t5$.close();
        return t5$;
      })());
      canvas.drawPath(hourglassPath, this[_paint$]);
      let upperPart = (t5$0 = ui.Path.new(), (() => {
        t5$0.moveTo(0, top);
        t5$0.addRect(new ui.Rect.fromLTRB(0, halfHeight * dart.nullCheck(this.poured), size.width, halfHeight));
        return t5$0;
      })());
      canvas.drawPath(ui.Path.combine(ui.PathOperation.intersect, hourglassPath, upperPart), this[_powderPaint]);
      let lowerPartPath = (t5$1 = ui.Path.new(), (() => {
        t5$1.moveTo(centerX, bottom);
        t5$1.relativeLineTo(hourglassWidth * dart.nullCheck(this.poured), 0);
        t5$1.lineTo(centerX, bottom - dart.nullCheck(this.poured) * halfHeight - gapWidth);
        t5$1.lineTo(centerX - hourglassWidth * dart.nullCheck(this.poured), bottom);
        t5$1.close();
        return t5$1;
      })());
      let lowerPart = ui.Path.combine(ui.PathOperation.intersect, lowerPartPath, (t5$2 = ui.Path.new(), (() => {
        t5$2.addRect(new ui.Rect.fromLTRB(0, halfHeight, size.width, size.height));
        return t5$2;
      })()));
      canvas.drawPath(lowerPart, this[_powderPaint]);
      canvas.drawLine(new ui.Offset.new(centerX, halfHeight), new ui.Offset.new(centerX, bottom), this[_paint$]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return true;
    }
  };
  (pouring_hour_glass._HourGlassPaint.new = function(opts) {
    let t5, t5$;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let poured = opts && 'poured' in opts ? opts.poured : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this.strokeWidth = strokeWidth;
    this.poured = poured;
    this[_paint$] = (t5 = ui.Paint.new(), (() => {
      t5.style = ui.PaintingStyle.stroke;
      t5.color = color;
      return t5;
    })());
    this[_powderPaint] = (t5$ = ui.Paint.new(), (() => {
      t5$.style = ui.PaintingStyle.fill;
      t5$.color = color;
      return t5$;
    })());
    pouring_hour_glass._HourGlassPaint.__proto__.new.call(this);
    ;
  }).prototype = pouring_hour_glass._HourGlassPaint.prototype;
  dart.addTypeTests(pouring_hour_glass._HourGlassPaint);
  dart.addTypeCaches(pouring_hour_glass._HourGlassPaint);
  dart.setMethodSignature(pouring_hour_glass._HourGlassPaint, () => ({
    __proto__: dart.getMethods(pouring_hour_glass._HourGlassPaint.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(pouring_hour_glass._HourGlassPaint, I[36]);
  dart.setFieldSignature(pouring_hour_glass._HourGlassPaint, () => ({
    __proto__: dart.getFields(pouring_hour_glass._HourGlassPaint.__proto__),
    strokeWidth: dart.finalFieldType(dart.nullable(core.double)),
    poured: dart.finalFieldType(dart.nullable(core.double)),
    [_paint$]: dart.finalFieldType(ui.Paint),
    [_powderPaint]: dart.finalFieldType(ui.Paint)
  }));
  var size$13 = dart.privateName(pouring_hour_glass_refined, "SpinKitPouringHourGlassRefined.size");
  var color$13 = dart.privateName(pouring_hour_glass_refined, "SpinKitPouringHourGlassRefined.color");
  var duration$13 = dart.privateName(pouring_hour_glass_refined, "SpinKitPouringHourGlassRefined.duration");
  var strokeWidth$0 = dart.privateName(pouring_hour_glass_refined, "SpinKitPouringHourGlassRefined.strokeWidth");
  var controller$12 = dart.privateName(pouring_hour_glass_refined, "SpinKitPouringHourGlassRefined.controller");
  pouring_hour_glass_refined.SpinKitPouringHourGlassRefined = class SpinKitPouringHourGlassRefined extends framework.StatefulWidget {
    get size() {
      return this[size$13];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$13];
    }
    set color(value) {
      super.color = value;
    }
    get duration() {
      return this[duration$13];
    }
    set duration(value) {
      super.duration = value;
    }
    get strokeWidth() {
      return this[strokeWidth$0];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    get controller() {
      return this[controller$12];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new pouring_hour_glass_refined.SpinKitPouringHourGlassRefined.new({key: key, color: color, size: size, duration: duration, strokeWidth: strokeWidth, controller: controller});
    }
    createState() {
      return new pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.new();
    }
  };
  (pouring_hour_glass_refined.SpinKitPouringHourGlassRefined.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$13] = color;
    this[size$13] = size;
    this[duration$13] = duration;
    this[strokeWidth$0] = strokeWidth;
    this[controller$12] = controller;
    pouring_hour_glass_refined.SpinKitPouringHourGlassRefined.__proto__.new.call(this, {key: key});
    ;
  }).prototype = pouring_hour_glass_refined.SpinKitPouringHourGlassRefined.prototype;
  dart.addTypeTests(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined);
  dart.addTypeCaches(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined);
  dart.setMethodSignature(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined, () => ({
    __proto__: dart.getMethods(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined.__proto__),
    createState: dart.fnType(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState, [])
  }));
  dart.setLibraryUri(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined, I[37]);
  dart.setFieldSignature(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined, () => ({
    __proto__: dart.getFields(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined.__proto__),
    size: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    duration: dart.finalFieldType(core.Duration),
    strokeWidth: dart.finalFieldType(dart.nullable(core.double)),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitPouringHourGlassRefinedState__controller = dart.privateName(pouring_hour_glass_refined, "_#_SpinKitPouringHourGlassRefinedState#_controller");
  var ___SpinKitPouringHourGlassRefinedState__pouringAnimation = dart.privateName(pouring_hour_glass_refined, "_#_SpinKitPouringHourGlassRefinedState#_pouringAnimation");
  var ___SpinKitPouringHourGlassRefinedState__rotationAnimation = dart.privateName(pouring_hour_glass_refined, "_#_SpinKitPouringHourGlassRefinedState#_rotationAnimation");
  var _controller$10 = dart.privateName(pouring_hour_glass_refined, "_controller");
  var _pouringAnimation$ = dart.privateName(pouring_hour_glass_refined, "_pouringAnimation");
  var _rotationAnimation$ = dart.privateName(pouring_hour_glass_refined, "_rotationAnimation");
  const State_SingleTickerProviderStateMixin$36$10 = class State_SingleTickerProviderStateMixin extends framework.State$(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined) {};
  (State_SingleTickerProviderStateMixin$36$10.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$10.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$10.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$10, ticker_provider.SingleTickerProviderStateMixin$(pouring_hour_glass_refined.SpinKitPouringHourGlassRefined));
  pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState = class _SpinKitPouringHourGlassRefinedState extends State_SingleTickerProviderStateMixin$36$10 {
    get [_controller$10]() {
      let t5;
      t5 = this[___SpinKitPouringHourGlassRefinedState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$10](library$32package$58flutter_spinkit$47src$47pouring_hour_glass_refined$46dart$58$58_controller$35param) {
      this[___SpinKitPouringHourGlassRefinedState__controller] = library$32package$58flutter_spinkit$47src$47pouring_hour_glass_refined$46dart$58$58_controller$35param;
    }
    get [_pouringAnimation$]() {
      let t5;
      t5 = this[___SpinKitPouringHourGlassRefinedState__pouringAnimation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_pouringAnimation")) : t5;
    }
    set [_pouringAnimation$](library$32package$58flutter_spinkit$47src$47pouring_hour_glass_refined$46dart$58$58_pouringAnimation$35param) {
      this[___SpinKitPouringHourGlassRefinedState__pouringAnimation] = library$32package$58flutter_spinkit$47src$47pouring_hour_glass_refined$46dart$58$58_pouringAnimation$35param;
    }
    get [_rotationAnimation$]() {
      let t5;
      t5 = this[___SpinKitPouringHourGlassRefinedState__rotationAnimation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_rotationAnimation")) : t5;
    }
    set [_rotationAnimation$](library$32package$58flutter_spinkit$47src$47pouring_hour_glass_refined$46dart$58$58_rotationAnimation$35param) {
      this[___SpinKitPouringHourGlassRefinedState__rotationAnimation] = library$32package$58flutter_spinkit$47src$47pouring_hour_glass_refined$46dart$58$58_rotationAnimation$35param;
    }
    initState() {
      let t5, t5$, t5$0;
      super.initState();
      this[_controller$10] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_pouringAnimation$] = (t5$0 = new animations.CurvedAnimation.new({parent: this[_controller$10], curve: C[47] || CT.C47}), (() => {
        t5$0.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        return t5$0;
      })());
      this[_rotationAnimation$] = new (T.TweenOfdouble()).new({begin: 0, end: 0.5}).animate(new animations.CurvedAnimation.new({parent: this[_controller$10], curve: C[48] || CT.C48}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$10].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new transitions.RotationTransition.new({turns: this[_rotationAnimation$], child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.7071067811865476), child: new basic.CustomPaint.new({painter: new pouring_hour_glass_refined._HourGlassPaint.new({poured: this[_pouringAnimation$].value, color: this.widget.color, strokeWidth: this.widget.strokeWidth})})})})});
    }
    static ['_#new#tearOff']() {
      return new pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.new();
    }
  };
  (pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.new = function() {
    this[___SpinKitPouringHourGlassRefinedState__controller] = null;
    this[___SpinKitPouringHourGlassRefinedState__pouringAnimation] = null;
    this[___SpinKitPouringHourGlassRefinedState__rotationAnimation] = null;
    pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.__proto__.new.call(this);
    ;
  }).prototype = pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.prototype;
  dart.addTypeTests(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState);
  dart.addTypeCaches(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState);
  dart.setMethodSignature(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState, () => ({
    __proto__: dart.getMethods(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState, () => ({
    __proto__: dart.getGetters(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.__proto__),
    [_controller$10]: animation_controller.AnimationController,
    [_pouringAnimation$]: animation.Animation$(core.double),
    [_rotationAnimation$]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState, () => ({
    __proto__: dart.getSetters(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.__proto__),
    [_controller$10]: animation_controller.AnimationController,
    [_pouringAnimation$]: animation.Animation$(core.double),
    [_rotationAnimation$]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState, I[37]);
  dart.setFieldSignature(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState, () => ({
    __proto__: dart.getFields(pouring_hour_glass_refined._SpinKitPouringHourGlassRefinedState.__proto__),
    [___SpinKitPouringHourGlassRefinedState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitPouringHourGlassRefinedState__pouringAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitPouringHourGlassRefinedState__rotationAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var _paint$0 = dart.privateName(pouring_hour_glass_refined, "_paint");
  var _powderPaint$ = dart.privateName(pouring_hour_glass_refined, "_powderPaint");
  pouring_hour_glass_refined._HourGlassPaint = class _HourGlassPaint extends custom_paint.CustomPainter {
    static ['_#new#tearOff'](opts) {
      let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
      let poured = opts && 'poured' in opts ? opts.poured : null;
      let color = opts && 'color' in opts ? opts.color : null;
      return new pouring_hour_glass_refined._HourGlassPaint.new({strokeWidth: strokeWidth, poured: poured, color: color});
    }
    paint(canvas, size) {
      let t5, t5$, t5$0, t5$1, t5$2;
      let centerX = size.width / 2;
      let halfHeight = size.height / 2;
      let hourglassWidth = math.min(core.double, centerX * 0.8, halfHeight);
      let gapWidth = math.max(core.double, 3, hourglassWidth * 0.05);
      let yPadding = gapWidth / 2;
      let top = yPadding;
      let bottom = size.height - yPadding;
      this[_paint$0].strokeWidth = (t5 = this.strokeWidth, t5 == null ? gapWidth : t5);
      let hourglassPath = (t5$ = ui.Path.new(), (() => {
        t5$.moveTo(centerX - hourglassWidth + 2, top);
        t5$.lineTo(centerX + hourglassWidth, top);
        t5$.arcToPoint(new ui.Offset.new(centerX + hourglassWidth, top + 7), {radius: new ui.Radius.circular(4), clockwise: true});
        t5$.lineTo(centerX + hourglassWidth - 2, top + 8);
        t5$.quadraticBezierTo(centerX + hourglassWidth - 2, (top + halfHeight) / 2 + 2, centerX + gapWidth, halfHeight);
        t5$.quadraticBezierTo(centerX + hourglassWidth - 2, (bottom + halfHeight) / 2, centerX + hourglassWidth - 2, bottom - 7);
        t5$.arcToPoint(new ui.Offset.new(centerX + hourglassWidth, bottom), {radius: new ui.Radius.circular(4), clockwise: true});
        t5$.lineTo(centerX - hourglassWidth, bottom);
        t5$.arcToPoint(new ui.Offset.new(centerX - hourglassWidth, bottom - 7), {radius: new ui.Radius.circular(4), clockwise: true});
        t5$.lineTo(centerX - hourglassWidth + 2, bottom - 7);
        t5$.quadraticBezierTo(centerX - hourglassWidth + 2, (bottom + halfHeight) / 2, centerX - gapWidth, halfHeight);
        t5$.quadraticBezierTo(centerX - hourglassWidth + 2, (top + halfHeight) / 2 + 2, centerX - hourglassWidth + 2, top + 7);
        t5$.arcToPoint(new ui.Offset.new(centerX - hourglassWidth, top), {radius: new ui.Radius.circular(4), clockwise: true});
        t5$.close();
        return t5$;
      })());
      canvas.drawPath(hourglassPath, this[_paint$0]);
      let upperPart = (t5$0 = ui.Path.new(), (() => {
        t5$0.moveTo(0, top);
        t5$0.addRect(new ui.Rect.fromLTRB(0, halfHeight * dart.nullCheck(this.poured), size.width, halfHeight));
        return t5$0;
      })());
      canvas.drawPath(ui.Path.combine(ui.PathOperation.intersect, hourglassPath, upperPart), this[_powderPaint$]);
      let lowerPartPath = (t5$1 = ui.Path.new(), (() => {
        t5$1.moveTo(centerX, bottom);
        t5$1.relativeLineTo(hourglassWidth * dart.nullCheck(this.poured), 0);
        t5$1.lineTo(centerX, bottom - dart.nullCheck(this.poured) * halfHeight - gapWidth);
        t5$1.lineTo(centerX - hourglassWidth * dart.nullCheck(this.poured), bottom);
        t5$1.close();
        return t5$1;
      })());
      let lowerPart = ui.Path.combine(ui.PathOperation.intersect, lowerPartPath, (t5$2 = ui.Path.new(), (() => {
        t5$2.addRect(new ui.Rect.fromLTRB(0, halfHeight, size.width, size.height));
        return t5$2;
      })()));
      canvas.drawPath(lowerPart, this[_powderPaint$]);
      canvas.drawLine(new ui.Offset.new(centerX, halfHeight), new ui.Offset.new(centerX, bottom), this[_paint$0]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return true;
    }
  };
  (pouring_hour_glass_refined._HourGlassPaint.new = function(opts) {
    let t5, t5$;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let poured = opts && 'poured' in opts ? opts.poured : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this.strokeWidth = strokeWidth;
    this.poured = poured;
    this[_paint$0] = (t5 = ui.Paint.new(), (() => {
      t5.style = ui.PaintingStyle.stroke;
      t5.color = color;
      return t5;
    })());
    this[_powderPaint$] = (t5$ = ui.Paint.new(), (() => {
      t5$.style = ui.PaintingStyle.fill;
      t5$.color = color;
      return t5$;
    })());
    pouring_hour_glass_refined._HourGlassPaint.__proto__.new.call(this);
    ;
  }).prototype = pouring_hour_glass_refined._HourGlassPaint.prototype;
  dart.addTypeTests(pouring_hour_glass_refined._HourGlassPaint);
  dart.addTypeCaches(pouring_hour_glass_refined._HourGlassPaint);
  dart.setMethodSignature(pouring_hour_glass_refined._HourGlassPaint, () => ({
    __proto__: dart.getMethods(pouring_hour_glass_refined._HourGlassPaint.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(pouring_hour_glass_refined._HourGlassPaint, I[37]);
  dart.setFieldSignature(pouring_hour_glass_refined._HourGlassPaint, () => ({
    __proto__: dart.getFields(pouring_hour_glass_refined._HourGlassPaint.__proto__),
    strokeWidth: dart.finalFieldType(dart.nullable(core.double)),
    poured: dart.finalFieldType(dart.nullable(core.double)),
    [_paint$0]: dart.finalFieldType(ui.Paint),
    [_powderPaint$]: dart.finalFieldType(ui.Paint)
  }));
  var color$14 = dart.privateName(pulse, "SpinKitPulse.color");
  var size$14 = dart.privateName(pulse, "SpinKitPulse.size");
  var itemBuilder$10 = dart.privateName(pulse, "SpinKitPulse.itemBuilder");
  var duration$14 = dart.privateName(pulse, "SpinKitPulse.duration");
  var controller$13 = dart.privateName(pulse, "SpinKitPulse.controller");
  pulse.SpinKitPulse = class SpinKitPulse extends framework.StatefulWidget {
    get color() {
      return this[color$14];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$14];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$10];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$14];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$13];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[50] || CT.C50;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new pulse.SpinKitPulse.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new pulse._SpinKitPulseState.new();
    }
  };
  (pulse.SpinKitPulse.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[50] || CT.C50;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$14] = color;
    this[size$14] = size;
    this[itemBuilder$10] = itemBuilder;
    this[duration$14] = duration;
    this[controller$13] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[38], 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    pulse.SpinKitPulse.__proto__.new.call(this, {key: key});
    ;
  }).prototype = pulse.SpinKitPulse.prototype;
  dart.addTypeTests(pulse.SpinKitPulse);
  dart.addTypeCaches(pulse.SpinKitPulse);
  dart.setMethodSignature(pulse.SpinKitPulse, () => ({
    __proto__: dart.getMethods(pulse.SpinKitPulse.__proto__),
    createState: dart.fnType(pulse._SpinKitPulseState, [])
  }));
  dart.setLibraryUri(pulse.SpinKitPulse, I[39]);
  dart.setFieldSignature(pulse.SpinKitPulse, () => ({
    __proto__: dart.getFields(pulse.SpinKitPulse.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitPulseState__controller = dart.privateName(pulse, "_#_SpinKitPulseState#_controller");
  var ___SpinKitPulseState__animation = dart.privateName(pulse, "_#_SpinKitPulseState#_animation");
  var _controller$11 = dart.privateName(pulse, "_controller");
  var _animation$1 = dart.privateName(pulse, "_animation");
  var _itemBuilder$8 = dart.privateName(pulse, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$11 = class State_SingleTickerProviderStateMixin extends framework.State$(pulse.SpinKitPulse) {};
  (State_SingleTickerProviderStateMixin$36$11.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pulse.SpinKitPulse)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$11.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$11.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$11, ticker_provider.SingleTickerProviderStateMixin$(pulse.SpinKitPulse));
  pulse._SpinKitPulseState = class _SpinKitPulseState extends State_SingleTickerProviderStateMixin$36$11 {
    get [_controller$11]() {
      let t5;
      t5 = this[___SpinKitPulseState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$11](library$32package$58flutter_spinkit$47src$47pulse$46dart$58$58_controller$35param) {
      this[___SpinKitPulseState__controller] = library$32package$58flutter_spinkit$47src$47pulse$46dart$58$58_controller$35param;
    }
    get [_animation$1]() {
      let t5;
      t5 = this[___SpinKitPulseState__animation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation")) : t5;
    }
    set [_animation$1](library$32package$58flutter_spinkit$47src$47pulse$46dart$58$58_animation$35param) {
      this[___SpinKitPulseState__animation] = library$32package$58flutter_spinkit$47src$47pulse$46dart$58$58_animation$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$11] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_animation$1] = new tween.CurveTween.new({curve: curves.Curves.easeInOut}).animate(this[_controller$11]);
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$11].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.Opacity.new({opacity: 1 - this[_animation$1].value, child: new basic.Transform.scale({scale: this[_animation$1].value, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$8](0)})})})});
    }
    [_itemBuilder$8](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.widget.color})});
    }
    static ['_#new#tearOff']() {
      return new pulse._SpinKitPulseState.new();
    }
  };
  (pulse._SpinKitPulseState.new = function() {
    this[___SpinKitPulseState__controller] = null;
    this[___SpinKitPulseState__animation] = null;
    pulse._SpinKitPulseState.__proto__.new.call(this);
    ;
  }).prototype = pulse._SpinKitPulseState.prototype;
  dart.addTypeTests(pulse._SpinKitPulseState);
  dart.addTypeCaches(pulse._SpinKitPulseState);
  dart.setMethodSignature(pulse._SpinKitPulseState, () => ({
    __proto__: dart.getMethods(pulse._SpinKitPulseState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$8]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(pulse._SpinKitPulseState, () => ({
    __proto__: dart.getGetters(pulse._SpinKitPulseState.__proto__),
    [_controller$11]: animation_controller.AnimationController,
    [_animation$1]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(pulse._SpinKitPulseState, () => ({
    __proto__: dart.getSetters(pulse._SpinKitPulseState.__proto__),
    [_controller$11]: animation_controller.AnimationController,
    [_animation$1]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(pulse._SpinKitPulseState, I[39]);
  dart.setFieldSignature(pulse._SpinKitPulseState, () => ({
    __proto__: dart.getFields(pulse._SpinKitPulseState.__proto__),
    [___SpinKitPulseState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitPulseState__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$15 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.color");
  var size$15 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.size");
  var itemBuilder$11 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.itemBuilder");
  var duration$15 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.duration");
  var controller$14 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.controller");
  pumping_heart.SpinKitPumpingHeart = class SpinKitPumpingHeart extends framework.StatefulWidget {
    get color() {
      return this[color$15];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$15];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$11];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$15];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$14];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new pumping_heart.SpinKitPumpingHeart.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new pumping_heart._SpinKitPumpingHeartState.new();
    }
  };
  (pumping_heart.SpinKitPumpingHeart.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[38] || CT.C38;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$15] = color;
    this[size$15] = size;
    this[itemBuilder$11] = itemBuilder;
    this[duration$15] = duration;
    this[controller$14] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[40], 14, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    pumping_heart.SpinKitPumpingHeart.__proto__.new.call(this, {key: key});
    ;
  }).prototype = pumping_heart.SpinKitPumpingHeart.prototype;
  dart.addTypeTests(pumping_heart.SpinKitPumpingHeart);
  dart.addTypeCaches(pumping_heart.SpinKitPumpingHeart);
  dart.setMethodSignature(pumping_heart.SpinKitPumpingHeart, () => ({
    __proto__: dart.getMethods(pumping_heart.SpinKitPumpingHeart.__proto__),
    createState: dart.fnType(pumping_heart._SpinKitPumpingHeartState, [])
  }));
  dart.setLibraryUri(pumping_heart.SpinKitPumpingHeart, I[41]);
  dart.setFieldSignature(pumping_heart.SpinKitPumpingHeart, () => ({
    __proto__: dart.getFields(pumping_heart.SpinKitPumpingHeart.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitPumpingHeartState__controller = dart.privateName(pumping_heart, "_#_SpinKitPumpingHeartState#_controller");
  var ___SpinKitPumpingHeartState__animation = dart.privateName(pumping_heart, "_#_SpinKitPumpingHeartState#_animation");
  var _controller$12 = dart.privateName(pumping_heart, "_controller");
  var _animation$2 = dart.privateName(pumping_heart, "_animation");
  var _itemBuilder$9 = dart.privateName(pumping_heart, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$12 = class State_SingleTickerProviderStateMixin extends framework.State$(pumping_heart.SpinKitPumpingHeart) {};
  (State_SingleTickerProviderStateMixin$36$12.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pumping_heart.SpinKitPumpingHeart)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$12.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$12.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$12, ticker_provider.SingleTickerProviderStateMixin$(pumping_heart.SpinKitPumpingHeart));
  pumping_heart._SpinKitPumpingHeartState = class _SpinKitPumpingHeartState extends State_SingleTickerProviderStateMixin$36$12 {
    get [_controller$12]() {
      let t5;
      t5 = this[___SpinKitPumpingHeartState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$12](library$32package$58flutter_spinkit$47src$47pumping_heart$46dart$58$58_controller$35param) {
      this[___SpinKitPumpingHeartState__controller] = library$32package$58flutter_spinkit$47src$47pumping_heart$46dart$58$58_controller$35param;
    }
    get [_animation$2]() {
      let t5;
      t5 = this[___SpinKitPumpingHeartState__animation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation")) : t5;
    }
    set [_animation$2](library$32package$58flutter_spinkit$47src$47pumping_heart$46dart$58$58_animation$35param) {
      this[___SpinKitPumpingHeartState__animation] = library$32package$58flutter_spinkit$47src$47pumping_heart$46dart$58$58_animation$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$12] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.repeat();
        return t5$;
      })());
      this[_animation$2] = new (T.TweenOfdouble()).new({begin: 1, end: 1.25}).animate(new animations.CurvedAnimation.new({parent: this[_controller$12], curve: C[51] || CT.C51}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$12].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new transitions.ScaleTransition.new({scale: this[_animation$2], child: this[_itemBuilder$9](0)});
    }
    [_itemBuilder$9](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new icon.Icon.new(icons.Icons.favorite, {color: this.widget.color, size: this.widget.size});
    }
    static ['_#new#tearOff']() {
      return new pumping_heart._SpinKitPumpingHeartState.new();
    }
  };
  (pumping_heart._SpinKitPumpingHeartState.new = function() {
    this[___SpinKitPumpingHeartState__controller] = null;
    this[___SpinKitPumpingHeartState__animation] = null;
    pumping_heart._SpinKitPumpingHeartState.__proto__.new.call(this);
    ;
  }).prototype = pumping_heart._SpinKitPumpingHeartState.prototype;
  dart.addTypeTests(pumping_heart._SpinKitPumpingHeartState);
  dart.addTypeCaches(pumping_heart._SpinKitPumpingHeartState);
  dart.setMethodSignature(pumping_heart._SpinKitPumpingHeartState, () => ({
    __proto__: dart.getMethods(pumping_heart._SpinKitPumpingHeartState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$9]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(pumping_heart._SpinKitPumpingHeartState, () => ({
    __proto__: dart.getGetters(pumping_heart._SpinKitPumpingHeartState.__proto__),
    [_controller$12]: animation_controller.AnimationController,
    [_animation$2]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(pumping_heart._SpinKitPumpingHeartState, () => ({
    __proto__: dart.getSetters(pumping_heart._SpinKitPumpingHeartState.__proto__),
    [_controller$12]: animation_controller.AnimationController,
    [_animation$2]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(pumping_heart._SpinKitPumpingHeartState, I[41]);
  dart.setFieldSignature(pumping_heart._SpinKitPumpingHeartState, () => ({
    __proto__: dart.getFields(pumping_heart._SpinKitPumpingHeartState.__proto__),
    [___SpinKitPumpingHeartState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitPumpingHeartState__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  pumping_heart.SpinKitPumpCurve = class SpinKitPumpCurve extends curves.Curve {
    static ['_#new#tearOff']() {
      return new pumping_heart.SpinKitPumpCurve.new();
    }
    transform(t) {
      if (t >= 0 && t < 0.22) {
        return math.pow(t, 1) * 4.54545454;
      } else if (t >= 0.22 && t < 0.44) {
        return 1 - math.pow(t - 0.22, 1) * 4.54545454;
      } else if (t >= 0.44 && t < 0.5) {
        return 0;
      } else if (t >= 0.5 && t < 0.72) {
        return math.pow(t - 0.5, 1) * (4.54545454 / 2);
      } else if (t >= 0.72 && t < 0.94) {
        return 0.5 - math.pow(t - 0.72, 1) * (4.54545454 / 2);
      }
      return 0;
    }
  };
  (pumping_heart.SpinKitPumpCurve.new = function() {
    pumping_heart.SpinKitPumpCurve.__proto__.new.call(this);
    ;
  }).prototype = pumping_heart.SpinKitPumpCurve.prototype;
  dart.addTypeTests(pumping_heart.SpinKitPumpCurve);
  dart.addTypeCaches(pumping_heart.SpinKitPumpCurve);
  dart.setLibraryUri(pumping_heart.SpinKitPumpCurve, I[41]);
  dart.setStaticFieldSignature(pumping_heart.SpinKitPumpCurve, () => ['magicNumber']);
  dart.defineLazy(pumping_heart.SpinKitPumpCurve, {
    /*pumping_heart.SpinKitPumpCurve.magicNumber*/get magicNumber() {
      return 4.54545454;
    }
  }, false);
  var color$16 = dart.privateName(ring, "SpinKitRing.color");
  var size$16 = dart.privateName(ring, "SpinKitRing.size");
  var lineWidth$0 = dart.privateName(ring, "SpinKitRing.lineWidth");
  var duration$16 = dart.privateName(ring, "SpinKitRing.duration");
  var controller$15 = dart.privateName(ring, "SpinKitRing.controller");
  ring.SpinKitRing = class SpinKitRing extends framework.StatefulWidget {
    get color() {
      return this[color$16];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$16];
    }
    set size(value) {
      super.size = value;
    }
    get lineWidth() {
      return this[lineWidth$0];
    }
    set lineWidth(value) {
      super.lineWidth = value;
    }
    get duration() {
      return this[duration$16];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$15];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 7;
      let size = opts && 'size' in opts ? opts.size : 50;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new ring.SpinKitRing.new({key: key, color: color, lineWidth: lineWidth, size: size, duration: duration, controller: controller});
    }
    createState() {
      return new ring._SpinKitRingState.new();
    }
  };
  (ring.SpinKitRing.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 7;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$16] = color;
    this[lineWidth$0] = lineWidth;
    this[size$16] = size;
    this[duration$16] = duration;
    this[controller$15] = controller;
    ring.SpinKitRing.__proto__.new.call(this, {key: key});
    ;
  }).prototype = ring.SpinKitRing.prototype;
  dart.addTypeTests(ring.SpinKitRing);
  dart.addTypeCaches(ring.SpinKitRing);
  dart.setMethodSignature(ring.SpinKitRing, () => ({
    __proto__: dart.getMethods(ring.SpinKitRing.__proto__),
    createState: dart.fnType(ring._SpinKitRingState, [])
  }));
  dart.setLibraryUri(ring.SpinKitRing, I[42]);
  dart.setFieldSignature(ring.SpinKitRing, () => ({
    __proto__: dart.getFields(ring.SpinKitRing.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    lineWidth: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitRingState__controller = dart.privateName(ring, "_#_SpinKitRingState#_controller");
  var ___SpinKitRingState__animation1 = dart.privateName(ring, "_#_SpinKitRingState#_animation1");
  var ___SpinKitRingState__animation2 = dart.privateName(ring, "_#_SpinKitRingState#_animation2");
  var ___SpinKitRingState__animation3 = dart.privateName(ring, "_#_SpinKitRingState#_animation3");
  var _controller$13 = dart.privateName(ring, "_controller");
  var _animation1 = dart.privateName(ring, "_animation1");
  var _animation2 = dart.privateName(ring, "_animation2");
  var _animation3 = dart.privateName(ring, "_animation3");
  const State_SingleTickerProviderStateMixin$36$13 = class State_SingleTickerProviderStateMixin extends framework.State$(ring.SpinKitRing) {};
  (State_SingleTickerProviderStateMixin$36$13.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(ring.SpinKitRing)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$13.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$13.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$13, ticker_provider.SingleTickerProviderStateMixin$(ring.SpinKitRing));
  ring._SpinKitRingState = class _SpinKitRingState extends State_SingleTickerProviderStateMixin$36$13 {
    get [_controller$13]() {
      let t5;
      t5 = this[___SpinKitRingState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$13](library$32package$58flutter_spinkit$47src$47ring$46dart$58$58_controller$35param) {
      this[___SpinKitRingState__controller] = library$32package$58flutter_spinkit$47src$47ring$46dart$58$58_controller$35param;
    }
    get [_animation1]() {
      let t5;
      t5 = this[___SpinKitRingState__animation1];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation1")) : t5;
    }
    set [_animation1](library$32package$58flutter_spinkit$47src$47ring$46dart$58$58_animation1$35param) {
      this[___SpinKitRingState__animation1] = library$32package$58flutter_spinkit$47src$47ring$46dart$58$58_animation1$35param;
    }
    get [_animation2]() {
      let t5;
      t5 = this[___SpinKitRingState__animation2];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation2")) : t5;
    }
    set [_animation2](library$32package$58flutter_spinkit$47src$47ring$46dart$58$58_animation2$35param) {
      this[___SpinKitRingState__animation2] = library$32package$58flutter_spinkit$47src$47ring$46dart$58$58_animation2$35param;
    }
    get [_animation3]() {
      let t5;
      t5 = this[___SpinKitRingState__animation3];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation3")) : t5;
    }
    set [_animation3](library$32package$58flutter_spinkit$47src$47ring$46dart$58$58_animation3$35param) {
      this[___SpinKitRingState__animation3] = library$32package$58flutter_spinkit$47src$47ring$46dart$58$58_animation3$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$13] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_animation1] = new (T.TweenOfdouble()).new({begin: 0, end: 1}).animate(new animations.CurvedAnimation.new({parent: this[_controller$13], curve: C[36] || CT.C36}));
      this[_animation2] = new (T.TweenOfdouble()).new({begin: -2 / 3, end: 1 / 2}).animate(new animations.CurvedAnimation.new({parent: this[_controller$13], curve: C[53] || CT.C53}));
      this[_animation3] = new (T.TweenOfdouble()).new({begin: 0.25, end: 5 / 6}).animate(new animations.CurvedAnimation.new({parent: this[_controller$13], curve: C[54] || CT.C54}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$13].dispose();
      }
      super.dispose();
    }
    build(context) {
      let t5;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t5 = vector_math_64.Matrix4.identity(), (() => {
            t5.rotateZ(this[_animation1].value * 5 * 3.141592653589793 / 6);
            return t5;
          })()), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.CustomPaint.new({foregroundPainter: new ring.RingPainter.new({paintWidth: this.widget.lineWidth, trackColor: this.widget.color, progressPercent: this[_animation3].value, startAngle: 3.141592653589793 * this[_animation2].value})})})})});
    }
    static ['_#new#tearOff']() {
      return new ring._SpinKitRingState.new();
    }
  };
  (ring._SpinKitRingState.new = function() {
    this[___SpinKitRingState__controller] = null;
    this[___SpinKitRingState__animation1] = null;
    this[___SpinKitRingState__animation2] = null;
    this[___SpinKitRingState__animation3] = null;
    ring._SpinKitRingState.__proto__.new.call(this);
    ;
  }).prototype = ring._SpinKitRingState.prototype;
  dart.addTypeTests(ring._SpinKitRingState);
  dart.addTypeCaches(ring._SpinKitRingState);
  dart.setMethodSignature(ring._SpinKitRingState, () => ({
    __proto__: dart.getMethods(ring._SpinKitRingState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(ring._SpinKitRingState, () => ({
    __proto__: dart.getGetters(ring._SpinKitRingState.__proto__),
    [_controller$13]: animation_controller.AnimationController,
    [_animation1]: animation.Animation$(core.double),
    [_animation2]: animation.Animation$(core.double),
    [_animation3]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(ring._SpinKitRingState, () => ({
    __proto__: dart.getSetters(ring._SpinKitRingState.__proto__),
    [_controller$13]: animation_controller.AnimationController,
    [_animation1]: animation.Animation$(core.double),
    [_animation2]: animation.Animation$(core.double),
    [_animation3]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(ring._SpinKitRingState, I[42]);
  dart.setFieldSignature(ring._SpinKitRingState, () => ({
    __proto__: dart.getFields(ring._SpinKitRingState.__proto__),
    [___SpinKitRingState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitRingState__animation1]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitRingState__animation2]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitRingState__animation3]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var paintWidth$ = dart.privateName(ring, "RingPainter.paintWidth");
  var trackPaint = dart.privateName(ring, "RingPainter.trackPaint");
  var trackColor$ = dart.privateName(ring, "RingPainter.trackColor");
  var progressPercent$ = dart.privateName(ring, "RingPainter.progressPercent");
  var startAngle$ = dart.privateName(ring, "RingPainter.startAngle");
  ring.RingPainter = class RingPainter extends custom_paint.CustomPainter {
    get paintWidth() {
      return this[paintWidth$];
    }
    set paintWidth(value) {
      super.paintWidth = value;
    }
    get trackPaint() {
      return this[trackPaint];
    }
    set trackPaint(value) {
      super.trackPaint = value;
    }
    get trackColor() {
      return this[trackColor$];
    }
    set trackColor(value) {
      super.trackColor = value;
    }
    get progressPercent() {
      return this[progressPercent$];
    }
    set progressPercent(value) {
      super.progressPercent = value;
    }
    get startAngle() {
      return this[startAngle$];
    }
    set startAngle(value) {
      super.startAngle = value;
    }
    static ['_#new#tearOff'](opts) {
      let paintWidth = opts && 'paintWidth' in opts ? opts.paintWidth : null;
      let progressPercent = opts && 'progressPercent' in opts ? opts.progressPercent : null;
      let startAngle = opts && 'startAngle' in opts ? opts.startAngle : null;
      let trackColor = opts && 'trackColor' in opts ? opts.trackColor : null;
      return new ring.RingPainter.new({paintWidth: paintWidth, progressPercent: progressPercent, startAngle: startAngle, trackColor: trackColor});
    }
    paint(canvas, size) {
      let center = new ui.Offset.new(size.width / 2, size.height / 2);
      let radius = (math.min(core.double, size.width, size.height) - this.paintWidth) / 2;
      canvas.drawArc(new ui.Rect.fromCircle({center: center, radius: radius}), dart.nullCheck(this.startAngle), 2 * 3.141592653589793 * dart.nullCheck(this.progressPercent), false, this.trackPaint);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter.as(oldDelegate);
      return true;
    }
  };
  (ring.RingPainter.new = function(opts) {
    let t5;
    let paintWidth = opts && 'paintWidth' in opts ? opts.paintWidth : null;
    let progressPercent = opts && 'progressPercent' in opts ? opts.progressPercent : null;
    let startAngle = opts && 'startAngle' in opts ? opts.startAngle : null;
    let trackColor = opts && 'trackColor' in opts ? opts.trackColor : null;
    this[paintWidth$] = paintWidth;
    this[progressPercent$] = progressPercent;
    this[startAngle$] = startAngle;
    this[trackColor$] = trackColor;
    this[trackPaint] = (t5 = ui.Paint.new(), (() => {
      t5.color = trackColor;
      t5.style = ui.PaintingStyle.stroke;
      t5.strokeWidth = paintWidth;
      t5.strokeCap = ui.StrokeCap.square;
      return t5;
    })());
    ring.RingPainter.__proto__.new.call(this);
    ;
  }).prototype = ring.RingPainter.prototype;
  dart.addTypeTests(ring.RingPainter);
  dart.addTypeCaches(ring.RingPainter);
  dart.setMethodSignature(ring.RingPainter, () => ({
    __proto__: dart.getMethods(ring.RingPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(ring.RingPainter, I[42]);
  dart.setFieldSignature(ring.RingPainter, () => ({
    __proto__: dart.getFields(ring.RingPainter.__proto__),
    paintWidth: dart.finalFieldType(core.double),
    trackPaint: dart.finalFieldType(ui.Paint),
    trackColor: dart.finalFieldType(ui.Color),
    progressPercent: dart.finalFieldType(dart.nullable(core.double)),
    startAngle: dart.finalFieldType(dart.nullable(core.double))
  }));
  ring.SpinKitRingCurve = class SpinKitRingCurve extends curves.Curve {
    static ['_#new#tearOff']() {
      return new ring.SpinKitRingCurve.new();
    }
    transform(t) {
      return t <= 0.5 ? 2 * t : 2 * (1 - t);
    }
  };
  (ring.SpinKitRingCurve.new = function() {
    ring.SpinKitRingCurve.__proto__.new.call(this);
    ;
  }).prototype = ring.SpinKitRingCurve.prototype;
  dart.addTypeTests(ring.SpinKitRingCurve);
  dart.addTypeCaches(ring.SpinKitRingCurve);
  dart.setLibraryUri(ring.SpinKitRingCurve, I[42]);
  var color$17 = dart.privateName(ripple, "SpinKitRipple.color");
  var size$17 = dart.privateName(ripple, "SpinKitRipple.size");
  var borderWidth$ = dart.privateName(ripple, "SpinKitRipple.borderWidth");
  var itemBuilder$12 = dart.privateName(ripple, "SpinKitRipple.itemBuilder");
  var duration$17 = dart.privateName(ripple, "SpinKitRipple.duration");
  var controller$16 = dart.privateName(ripple, "SpinKitRipple.controller");
  ripple.SpinKitRipple = class SpinKitRipple extends framework.StatefulWidget {
    get color() {
      return this[color$17];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$17];
    }
    set size(value) {
      super.size = value;
    }
    get borderWidth() {
      return this[borderWidth$];
    }
    set borderWidth(value) {
      super.borderWidth = value;
    }
    get itemBuilder() {
      return this[itemBuilder$12];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$17];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$16];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let borderWidth = opts && 'borderWidth' in opts ? opts.borderWidth : 6;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[56] || CT.C56;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new ripple.SpinKitRipple.new({key: key, color: color, size: size, borderWidth: borderWidth, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new ripple._SpinKitRippleState.new();
    }
  };
  (ripple.SpinKitRipple.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let borderWidth = opts && 'borderWidth' in opts ? opts.borderWidth : 6;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[56] || CT.C56;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$17] = color;
    this[size$17] = size;
    this[borderWidth$] = borderWidth;
    this[itemBuilder$12] = itemBuilder;
    this[duration$17] = duration;
    this[controller$16] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[43], 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    ripple.SpinKitRipple.__proto__.new.call(this, {key: key});
    ;
  }).prototype = ripple.SpinKitRipple.prototype;
  dart.addTypeTests(ripple.SpinKitRipple);
  dart.addTypeCaches(ripple.SpinKitRipple);
  dart.setMethodSignature(ripple.SpinKitRipple, () => ({
    __proto__: dart.getMethods(ripple.SpinKitRipple.__proto__),
    createState: dart.fnType(ripple._SpinKitRippleState, [])
  }));
  dart.setLibraryUri(ripple.SpinKitRipple, I[44]);
  dart.setFieldSignature(ripple.SpinKitRipple, () => ({
    __proto__: dart.getFields(ripple.SpinKitRipple.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    borderWidth: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitRippleState__controller = dart.privateName(ripple, "_#_SpinKitRippleState#_controller");
  var ___SpinKitRippleState__animation1 = dart.privateName(ripple, "_#_SpinKitRippleState#_animation1");
  var ___SpinKitRippleState__animation2 = dart.privateName(ripple, "_#_SpinKitRippleState#_animation2");
  var _controller$14 = dart.privateName(ripple, "_controller");
  var _animation1$ = dart.privateName(ripple, "_animation1");
  var _animation2$ = dart.privateName(ripple, "_animation2");
  var _itemBuilder$10 = dart.privateName(ripple, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$14 = class State_SingleTickerProviderStateMixin extends framework.State$(ripple.SpinKitRipple) {};
  (State_SingleTickerProviderStateMixin$36$14.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(ripple.SpinKitRipple)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$14.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$14.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$14, ticker_provider.SingleTickerProviderStateMixin$(ripple.SpinKitRipple));
  ripple._SpinKitRippleState = class _SpinKitRippleState extends State_SingleTickerProviderStateMixin$36$14 {
    get [_controller$14]() {
      let t5;
      t5 = this[___SpinKitRippleState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$14](library$32package$58flutter_spinkit$47src$47ripple$46dart$58$58_controller$35param) {
      this[___SpinKitRippleState__controller] = library$32package$58flutter_spinkit$47src$47ripple$46dart$58$58_controller$35param;
    }
    get [_animation1$]() {
      let t5;
      t5 = this[___SpinKitRippleState__animation1];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation1")) : t5;
    }
    set [_animation1$](library$32package$58flutter_spinkit$47src$47ripple$46dart$58$58_animation1$35param) {
      this[___SpinKitRippleState__animation1] = library$32package$58flutter_spinkit$47src$47ripple$46dart$58$58_animation1$35param;
    }
    get [_animation2$]() {
      let t5;
      t5 = this[___SpinKitRippleState__animation2];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation2")) : t5;
    }
    set [_animation2$](library$32package$58flutter_spinkit$47src$47ripple$46dart$58$58_animation2$35param) {
      this[___SpinKitRippleState__animation2] = library$32package$58flutter_spinkit$47src$47ripple$46dart$58$58_animation2$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$14] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_animation1$] = new (T.TweenOfdouble()).new({begin: 0, end: 1}).animate(new animations.CurvedAnimation.new({parent: this[_controller$14], curve: C[57] || CT.C57}));
      this[_animation2$] = new (T.TweenOfdouble()).new({begin: 0, end: 1}).animate(new animations.CurvedAnimation.new({parent: this[_controller$14], curve: C[58] || CT.C58}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$14].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.Stack.new({children: T.JSArrayOfWidget().of([new basic.Opacity.new({opacity: 1 - this[_animation1$].value, child: new basic.Transform.scale({scale: this[_animation1$].value, child: this[_itemBuilder$10](0)})}), new basic.Opacity.new({opacity: 1 - this[_animation2$].value, child: new basic.Transform.scale({scale: this[_animation2$].value, child: this[_itemBuilder$10](1)})})])})});
    }
    [_itemBuilder$10](index) {
      return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, border: box_border.Border.all({color: dart.nullCheck(this.widget.color), width: this.widget.borderWidth})})})});
    }
    static ['_#new#tearOff']() {
      return new ripple._SpinKitRippleState.new();
    }
  };
  (ripple._SpinKitRippleState.new = function() {
    this[___SpinKitRippleState__controller] = null;
    this[___SpinKitRippleState__animation1] = null;
    this[___SpinKitRippleState__animation2] = null;
    ripple._SpinKitRippleState.__proto__.new.call(this);
    ;
  }).prototype = ripple._SpinKitRippleState.prototype;
  dart.addTypeTests(ripple._SpinKitRippleState);
  dart.addTypeCaches(ripple._SpinKitRippleState);
  dart.setMethodSignature(ripple._SpinKitRippleState, () => ({
    __proto__: dart.getMethods(ripple._SpinKitRippleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$10]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(ripple._SpinKitRippleState, () => ({
    __proto__: dart.getGetters(ripple._SpinKitRippleState.__proto__),
    [_controller$14]: animation_controller.AnimationController,
    [_animation1$]: animation.Animation$(core.double),
    [_animation2$]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(ripple._SpinKitRippleState, () => ({
    __proto__: dart.getSetters(ripple._SpinKitRippleState.__proto__),
    [_controller$14]: animation_controller.AnimationController,
    [_animation1$]: animation.Animation$(core.double),
    [_animation2$]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(ripple._SpinKitRippleState, I[44]);
  dart.setFieldSignature(ripple._SpinKitRippleState, () => ({
    __proto__: dart.getFields(ripple._SpinKitRippleState.__proto__),
    [___SpinKitRippleState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitRippleState__animation1]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitRippleState__animation2]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$18 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.color");
  var size$18 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.size");
  var itemBuilder$13 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.itemBuilder");
  var duration$18 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.duration");
  var controller$17 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.controller");
  rotating_circle.SpinKitRotatingCircle = class SpinKitRotatingCircle extends framework.StatefulWidget {
    get color() {
      return this[color$18];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$18];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$13];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$18];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$17];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new rotating_circle.SpinKitRotatingCircle.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new rotating_circle._SpinKitRotatingCircleState.new();
    }
  };
  (rotating_circle.SpinKitRotatingCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$18] = color;
    this[size$18] = size;
    this[itemBuilder$13] = itemBuilder;
    this[duration$18] = duration;
    this[controller$17] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[45], 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    rotating_circle.SpinKitRotatingCircle.__proto__.new.call(this, {key: key});
    ;
  }).prototype = rotating_circle.SpinKitRotatingCircle.prototype;
  dart.addTypeTests(rotating_circle.SpinKitRotatingCircle);
  dart.addTypeCaches(rotating_circle.SpinKitRotatingCircle);
  dart.setMethodSignature(rotating_circle.SpinKitRotatingCircle, () => ({
    __proto__: dart.getMethods(rotating_circle.SpinKitRotatingCircle.__proto__),
    createState: dart.fnType(rotating_circle._SpinKitRotatingCircleState, [])
  }));
  dart.setLibraryUri(rotating_circle.SpinKitRotatingCircle, I[46]);
  dart.setFieldSignature(rotating_circle.SpinKitRotatingCircle, () => ({
    __proto__: dart.getFields(rotating_circle.SpinKitRotatingCircle.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitRotatingCircleState__controller = dart.privateName(rotating_circle, "_#_SpinKitRotatingCircleState#_controller");
  var ___SpinKitRotatingCircleState__animation1 = dart.privateName(rotating_circle, "_#_SpinKitRotatingCircleState#_animation1");
  var ___SpinKitRotatingCircleState__animation2 = dart.privateName(rotating_circle, "_#_SpinKitRotatingCircleState#_animation2");
  var _controller$15 = dart.privateName(rotating_circle, "_controller");
  var _animation1$0 = dart.privateName(rotating_circle, "_animation1");
  var _animation2$0 = dart.privateName(rotating_circle, "_animation2");
  var _itemBuilder$11 = dart.privateName(rotating_circle, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$15 = class State_SingleTickerProviderStateMixin extends framework.State$(rotating_circle.SpinKitRotatingCircle) {};
  (State_SingleTickerProviderStateMixin$36$15.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(rotating_circle.SpinKitRotatingCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$15.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$15.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$15, ticker_provider.SingleTickerProviderStateMixin$(rotating_circle.SpinKitRotatingCircle));
  rotating_circle._SpinKitRotatingCircleState = class _SpinKitRotatingCircleState extends State_SingleTickerProviderStateMixin$36$15 {
    get [_controller$15]() {
      let t5;
      t5 = this[___SpinKitRotatingCircleState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$15](library$32package$58flutter_spinkit$47src$47rotating_circle$46dart$58$58_controller$35param) {
      this[___SpinKitRotatingCircleState__controller] = library$32package$58flutter_spinkit$47src$47rotating_circle$46dart$58$58_controller$35param;
    }
    get [_animation1$0]() {
      let t5;
      t5 = this[___SpinKitRotatingCircleState__animation1];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation1")) : t5;
    }
    set [_animation1$0](library$32package$58flutter_spinkit$47src$47rotating_circle$46dart$58$58_animation1$35param) {
      this[___SpinKitRotatingCircleState__animation1] = library$32package$58flutter_spinkit$47src$47rotating_circle$46dart$58$58_animation1$35param;
    }
    get [_animation2$0]() {
      let t5;
      t5 = this[___SpinKitRotatingCircleState__animation2];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation2")) : t5;
    }
    set [_animation2$0](library$32package$58flutter_spinkit$47src$47rotating_circle$46dart$58$58_animation2$35param) {
      this[___SpinKitRotatingCircleState__animation2] = library$32package$58flutter_spinkit$47src$47rotating_circle$46dart$58$58_animation2$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$15] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_animation1$0] = new (T.TweenOfdouble()).new({begin: 0, end: 180}).animate(new animations.CurvedAnimation.new({parent: this[_controller$15], curve: C[59] || CT.C59}));
      this[_animation2$0] = new (T.TweenOfdouble()).new({begin: 0, end: 180}).animate(new animations.CurvedAnimation.new({parent: this[_controller$15], curve: C[60] || CT.C60}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$15].dispose();
      }
      super.dispose();
    }
    build(context) {
      let t5;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t5 = vector_math_64.Matrix4.identity(), (() => {
            t5.rotateX((0 - this[_animation1$0].value) * 0.0174533);
            t5.rotateY((0 - this[_animation2$0].value) * 0.0174533);
            return t5;
          })()), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$11](0)})})});
    }
    [_itemBuilder$11](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle})});
    }
    static ['_#new#tearOff']() {
      return new rotating_circle._SpinKitRotatingCircleState.new();
    }
  };
  (rotating_circle._SpinKitRotatingCircleState.new = function() {
    this[___SpinKitRotatingCircleState__controller] = null;
    this[___SpinKitRotatingCircleState__animation1] = null;
    this[___SpinKitRotatingCircleState__animation2] = null;
    rotating_circle._SpinKitRotatingCircleState.__proto__.new.call(this);
    ;
  }).prototype = rotating_circle._SpinKitRotatingCircleState.prototype;
  dart.addTypeTests(rotating_circle._SpinKitRotatingCircleState);
  dart.addTypeCaches(rotating_circle._SpinKitRotatingCircleState);
  dart.setMethodSignature(rotating_circle._SpinKitRotatingCircleState, () => ({
    __proto__: dart.getMethods(rotating_circle._SpinKitRotatingCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$11]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(rotating_circle._SpinKitRotatingCircleState, () => ({
    __proto__: dart.getGetters(rotating_circle._SpinKitRotatingCircleState.__proto__),
    [_controller$15]: animation_controller.AnimationController,
    [_animation1$0]: animation.Animation$(core.double),
    [_animation2$0]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(rotating_circle._SpinKitRotatingCircleState, () => ({
    __proto__: dart.getSetters(rotating_circle._SpinKitRotatingCircleState.__proto__),
    [_controller$15]: animation_controller.AnimationController,
    [_animation1$0]: animation.Animation$(core.double),
    [_animation2$0]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(rotating_circle._SpinKitRotatingCircleState, I[46]);
  dart.setFieldSignature(rotating_circle._SpinKitRotatingCircleState, () => ({
    __proto__: dart.getFields(rotating_circle._SpinKitRotatingCircleState.__proto__),
    [___SpinKitRotatingCircleState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitRotatingCircleState__animation1]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitRotatingCircleState__animation2]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$19 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.color");
  var size$19 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.size");
  var itemBuilder$14 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.itemBuilder");
  var duration$19 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.duration");
  var controller$18 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.controller");
  rotating_plain.SpinKitRotatingPlain = class SpinKitRotatingPlain extends framework.StatefulWidget {
    get color() {
      return this[color$19];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$19];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$14];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$19];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$18];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new rotating_plain.SpinKitRotatingPlain.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new rotating_plain._SpinKitRotatingPlainState.new();
    }
  };
  (rotating_plain.SpinKitRotatingPlain.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$19] = color;
    this[size$19] = size;
    this[itemBuilder$14] = itemBuilder;
    this[duration$19] = duration;
    this[controller$18] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[47], 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    rotating_plain.SpinKitRotatingPlain.__proto__.new.call(this, {key: key});
    ;
  }).prototype = rotating_plain.SpinKitRotatingPlain.prototype;
  dart.addTypeTests(rotating_plain.SpinKitRotatingPlain);
  dart.addTypeCaches(rotating_plain.SpinKitRotatingPlain);
  dart.setMethodSignature(rotating_plain.SpinKitRotatingPlain, () => ({
    __proto__: dart.getMethods(rotating_plain.SpinKitRotatingPlain.__proto__),
    createState: dart.fnType(rotating_plain._SpinKitRotatingPlainState, [])
  }));
  dart.setLibraryUri(rotating_plain.SpinKitRotatingPlain, I[48]);
  dart.setFieldSignature(rotating_plain.SpinKitRotatingPlain, () => ({
    __proto__: dart.getFields(rotating_plain.SpinKitRotatingPlain.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitRotatingPlainState__controller = dart.privateName(rotating_plain, "_#_SpinKitRotatingPlainState#_controller");
  var ___SpinKitRotatingPlainState__animation1 = dart.privateName(rotating_plain, "_#_SpinKitRotatingPlainState#_animation1");
  var ___SpinKitRotatingPlainState__animation2 = dart.privateName(rotating_plain, "_#_SpinKitRotatingPlainState#_animation2");
  var _controller$16 = dart.privateName(rotating_plain, "_controller");
  var _animation1$1 = dart.privateName(rotating_plain, "_animation1");
  var _animation2$1 = dart.privateName(rotating_plain, "_animation2");
  var _itemBuilder$12 = dart.privateName(rotating_plain, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$16 = class State_SingleTickerProviderStateMixin extends framework.State$(rotating_plain.SpinKitRotatingPlain) {};
  (State_SingleTickerProviderStateMixin$36$16.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(rotating_plain.SpinKitRotatingPlain)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$16.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$16.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$16, ticker_provider.SingleTickerProviderStateMixin$(rotating_plain.SpinKitRotatingPlain));
  rotating_plain._SpinKitRotatingPlainState = class _SpinKitRotatingPlainState extends State_SingleTickerProviderStateMixin$36$16 {
    get [_controller$16]() {
      let t5;
      t5 = this[___SpinKitRotatingPlainState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$16](library$32package$58flutter_spinkit$47src$47rotating_plain$46dart$58$58_controller$35param) {
      this[___SpinKitRotatingPlainState__controller] = library$32package$58flutter_spinkit$47src$47rotating_plain$46dart$58$58_controller$35param;
    }
    get [_animation1$1]() {
      let t5;
      t5 = this[___SpinKitRotatingPlainState__animation1];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation1")) : t5;
    }
    set [_animation1$1](library$32package$58flutter_spinkit$47src$47rotating_plain$46dart$58$58_animation1$35param) {
      this[___SpinKitRotatingPlainState__animation1] = library$32package$58flutter_spinkit$47src$47rotating_plain$46dart$58$58_animation1$35param;
    }
    get [_animation2$1]() {
      let t5;
      t5 = this[___SpinKitRotatingPlainState__animation2];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation2")) : t5;
    }
    set [_animation2$1](library$32package$58flutter_spinkit$47src$47rotating_plain$46dart$58$58_animation2$35param) {
      this[___SpinKitRotatingPlainState__animation2] = library$32package$58flutter_spinkit$47src$47rotating_plain$46dart$58$58_animation2$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$16] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_animation1$1] = new (T.TweenOfdouble()).new({begin: 0, end: 180}).animate(new animations.CurvedAnimation.new({parent: this[_controller$16], curve: C[59] || CT.C59}));
      this[_animation2$1] = new (T.TweenOfdouble()).new({begin: 0, end: 180}).animate(new animations.CurvedAnimation.new({parent: this[_controller$16], curve: C[60] || CT.C60}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$16].dispose();
      }
      super.dispose();
    }
    build(context) {
      let t5;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t5 = vector_math_64.Matrix4.identity(), (() => {
            t5.rotateX((0 - this[_animation1$1].value) * 0.0174533);
            t5.rotateY((0 - this[_animation2$1].value) * 0.0174533);
            return t5;
          })()), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$12](0)})})});
    }
    [_itemBuilder$12](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color})});
    }
    static ['_#new#tearOff']() {
      return new rotating_plain._SpinKitRotatingPlainState.new();
    }
  };
  (rotating_plain._SpinKitRotatingPlainState.new = function() {
    this[___SpinKitRotatingPlainState__controller] = null;
    this[___SpinKitRotatingPlainState__animation1] = null;
    this[___SpinKitRotatingPlainState__animation2] = null;
    rotating_plain._SpinKitRotatingPlainState.__proto__.new.call(this);
    ;
  }).prototype = rotating_plain._SpinKitRotatingPlainState.prototype;
  dart.addTypeTests(rotating_plain._SpinKitRotatingPlainState);
  dart.addTypeCaches(rotating_plain._SpinKitRotatingPlainState);
  dart.setMethodSignature(rotating_plain._SpinKitRotatingPlainState, () => ({
    __proto__: dart.getMethods(rotating_plain._SpinKitRotatingPlainState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$12]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(rotating_plain._SpinKitRotatingPlainState, () => ({
    __proto__: dart.getGetters(rotating_plain._SpinKitRotatingPlainState.__proto__),
    [_controller$16]: animation_controller.AnimationController,
    [_animation1$1]: animation.Animation$(core.double),
    [_animation2$1]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(rotating_plain._SpinKitRotatingPlainState, () => ({
    __proto__: dart.getSetters(rotating_plain._SpinKitRotatingPlainState.__proto__),
    [_controller$16]: animation_controller.AnimationController,
    [_animation1$1]: animation.Animation$(core.double),
    [_animation2$1]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(rotating_plain._SpinKitRotatingPlainState, I[48]);
  dart.setFieldSignature(rotating_plain._SpinKitRotatingPlainState, () => ({
    __proto__: dart.getFields(rotating_plain._SpinKitRotatingPlainState.__proto__),
    [___SpinKitRotatingPlainState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitRotatingPlainState__animation1]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitRotatingPlainState__animation2]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$20 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.color");
  var shape$1 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.shape");
  var size$20 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.size");
  var itemBuilder$15 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.itemBuilder");
  var duration$20 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.duration");
  var controller$19 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.controller");
  spinning_circle.SpinKitSpinningCircle = class SpinKitSpinningCircle extends framework.StatefulWidget {
    get color() {
      return this[color$20];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$1];
    }
    set shape(value) {
      super.shape = value;
    }
    get size() {
      return this[size$20];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$15];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$20];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$19];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shape = opts && 'shape' in opts ? opts.shape : C[39] || CT.C39;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new spinning_circle.SpinKitSpinningCircle.new({key: key, color: color, shape: shape, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new spinning_circle._SpinKitSpinningCircleState.new();
    }
  };
  (spinning_circle.SpinKitSpinningCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C[39] || CT.C39;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$20] = color;
    this[shape$1] = shape;
    this[size$20] = size;
    this[itemBuilder$15] = itemBuilder;
    this[duration$20] = duration;
    this[controller$19] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[49], 14, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    spinning_circle.SpinKitSpinningCircle.__proto__.new.call(this, {key: key});
    ;
  }).prototype = spinning_circle.SpinKitSpinningCircle.prototype;
  dart.addTypeTests(spinning_circle.SpinKitSpinningCircle);
  dart.addTypeCaches(spinning_circle.SpinKitSpinningCircle);
  dart.setMethodSignature(spinning_circle.SpinKitSpinningCircle, () => ({
    __proto__: dart.getMethods(spinning_circle.SpinKitSpinningCircle.__proto__),
    createState: dart.fnType(spinning_circle._SpinKitSpinningCircleState, [])
  }));
  dart.setLibraryUri(spinning_circle.SpinKitSpinningCircle, I[50]);
  dart.setFieldSignature(spinning_circle.SpinKitSpinningCircle, () => ({
    __proto__: dart.getFields(spinning_circle.SpinKitSpinningCircle.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitSpinningCircleState__controller = dart.privateName(spinning_circle, "_#_SpinKitSpinningCircleState#_controller");
  var ___SpinKitSpinningCircleState__animation = dart.privateName(spinning_circle, "_#_SpinKitSpinningCircleState#_animation");
  var _controller$17 = dart.privateName(spinning_circle, "_controller");
  var _animation$3 = dart.privateName(spinning_circle, "_animation");
  var _itemBuilder$13 = dart.privateName(spinning_circle, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$17 = class State_SingleTickerProviderStateMixin extends framework.State$(spinning_circle.SpinKitSpinningCircle) {};
  (State_SingleTickerProviderStateMixin$36$17.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(spinning_circle.SpinKitSpinningCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$17.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$17.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$17, ticker_provider.SingleTickerProviderStateMixin$(spinning_circle.SpinKitSpinningCircle));
  spinning_circle._SpinKitSpinningCircleState = class _SpinKitSpinningCircleState extends State_SingleTickerProviderStateMixin$36$17 {
    get [_controller$17]() {
      let t5;
      t5 = this[___SpinKitSpinningCircleState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$17](library$32package$58flutter_spinkit$47src$47spinning_circle$46dart$58$58_controller$35param) {
      this[___SpinKitSpinningCircleState__controller] = library$32package$58flutter_spinkit$47src$47spinning_circle$46dart$58$58_controller$35param;
    }
    get [_animation$3]() {
      let t5;
      t5 = this[___SpinKitSpinningCircleState__animation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation")) : t5;
    }
    set [_animation$3](library$32package$58flutter_spinkit$47src$47spinning_circle$46dart$58$58_animation$35param) {
      this[___SpinKitSpinningCircleState__animation] = library$32package$58flutter_spinkit$47src$47spinning_circle$46dart$58$58_animation$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$17] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_animation$3] = new (T.TweenOfdouble()).new({begin: 0, end: 7}).animate(new animations.CurvedAnimation.new({parent: this[_controller$17], curve: C[40] || CT.C40}));
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$17].dispose();
      }
      super.dispose();
    }
    build(context) {
      let t5;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t5 = vector_math_64.Matrix4.identity(), (() => {
            t5.rotateY((0 - this[_animation$3].value) * 3.141592653589793);
            return t5;
          })()), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$13](0)})})});
    }
    [_itemBuilder$13](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape})});
    }
    static ['_#new#tearOff']() {
      return new spinning_circle._SpinKitSpinningCircleState.new();
    }
  };
  (spinning_circle._SpinKitSpinningCircleState.new = function() {
    this[___SpinKitSpinningCircleState__controller] = null;
    this[___SpinKitSpinningCircleState__animation] = null;
    spinning_circle._SpinKitSpinningCircleState.__proto__.new.call(this);
    ;
  }).prototype = spinning_circle._SpinKitSpinningCircleState.prototype;
  dart.addTypeTests(spinning_circle._SpinKitSpinningCircleState);
  dart.addTypeCaches(spinning_circle._SpinKitSpinningCircleState);
  dart.setMethodSignature(spinning_circle._SpinKitSpinningCircleState, () => ({
    __proto__: dart.getMethods(spinning_circle._SpinKitSpinningCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$13]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(spinning_circle._SpinKitSpinningCircleState, () => ({
    __proto__: dart.getGetters(spinning_circle._SpinKitSpinningCircleState.__proto__),
    [_controller$17]: animation_controller.AnimationController,
    [_animation$3]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(spinning_circle._SpinKitSpinningCircleState, () => ({
    __proto__: dart.getSetters(spinning_circle._SpinKitSpinningCircleState.__proto__),
    [_controller$17]: animation_controller.AnimationController,
    [_animation$3]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(spinning_circle._SpinKitSpinningCircleState, I[50]);
  dart.setFieldSignature(spinning_circle._SpinKitSpinningCircleState, () => ({
    __proto__: dart.getFields(spinning_circle._SpinKitSpinningCircleState.__proto__),
    [___SpinKitSpinningCircleState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitSpinningCircleState__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$21 = dart.privateName(spinning_lines, "SpinKitSpinningLines.color");
  var size$21 = dart.privateName(spinning_lines, "SpinKitSpinningLines.size");
  var lineWidth$1 = dart.privateName(spinning_lines, "SpinKitSpinningLines.lineWidth");
  var itemCount$0 = dart.privateName(spinning_lines, "SpinKitSpinningLines.itemCount");
  var duration$21 = dart.privateName(spinning_lines, "SpinKitSpinningLines.duration");
  var controller$20 = dart.privateName(spinning_lines, "SpinKitSpinningLines.controller");
  spinning_lines.SpinKitSpinningLines = class SpinKitSpinningLines extends framework.StatefulWidget {
    get color() {
      return this[color$21];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$21];
    }
    set size(value) {
      super.size = value;
    }
    get lineWidth() {
      return this[lineWidth$1];
    }
    set lineWidth(value) {
      super.lineWidth = value;
    }
    get itemCount() {
      return this[itemCount$0];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get duration() {
      return this[duration$21];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$20];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 70;
      let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 2;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : 5;
      let duration = opts && 'duration' in opts ? opts.duration : C[61] || CT.C61;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new spinning_lines.SpinKitSpinningLines.new({key: key, color: color, size: size, lineWidth: lineWidth, itemCount: itemCount, duration: duration, controller: controller});
    }
    createState() {
      return new spinning_lines._SpinKitSpinningLinesState.new();
    }
  };
  (spinning_lines.SpinKitSpinningLines.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 70;
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 2;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : 5;
    let duration = opts && 'duration' in opts ? opts.duration : C[61] || CT.C61;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$21] = color;
    this[size$21] = size;
    this[lineWidth$1] = lineWidth;
    this[itemCount$0] = itemCount;
    this[duration$21] = duration;
    this[controller$20] = controller;
    spinning_lines.SpinKitSpinningLines.__proto__.new.call(this, {key: key});
    ;
  }).prototype = spinning_lines.SpinKitSpinningLines.prototype;
  dart.addTypeTests(spinning_lines.SpinKitSpinningLines);
  dart.addTypeCaches(spinning_lines.SpinKitSpinningLines);
  dart.setMethodSignature(spinning_lines.SpinKitSpinningLines, () => ({
    __proto__: dart.getMethods(spinning_lines.SpinKitSpinningLines.__proto__),
    createState: dart.fnType(spinning_lines._SpinKitSpinningLinesState, [])
  }));
  dart.setLibraryUri(spinning_lines.SpinKitSpinningLines, I[51]);
  dart.setFieldSignature(spinning_lines.SpinKitSpinningLines, () => ({
    __proto__: dart.getFields(spinning_lines.SpinKitSpinningLines.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    lineWidth: dart.finalFieldType(core.double),
    itemCount: dart.finalFieldType(core.int),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitSpinningLinesState__controller = dart.privateName(spinning_lines, "_#_SpinKitSpinningLinesState#_controller");
  var ___SpinKitSpinningLinesState__animation = dart.privateName(spinning_lines, "_#_SpinKitSpinningLinesState#_animation");
  var _controller$18 = dart.privateName(spinning_lines, "_controller");
  var _animation$4 = dart.privateName(spinning_lines, "_animation");
  const State_SingleTickerProviderStateMixin$36$18 = class State_SingleTickerProviderStateMixin extends framework.State$(spinning_lines.SpinKitSpinningLines) {};
  (State_SingleTickerProviderStateMixin$36$18.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(spinning_lines.SpinKitSpinningLines)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$18.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$18.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$18, ticker_provider.SingleTickerProviderStateMixin$(spinning_lines.SpinKitSpinningLines));
  spinning_lines._SpinKitSpinningLinesState = class _SpinKitSpinningLinesState extends State_SingleTickerProviderStateMixin$36$18 {
    get [_controller$18]() {
      let t5;
      t5 = this[___SpinKitSpinningLinesState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$18](library$32package$58flutter_spinkit$47src$47spinning_lines$46dart$58$58_controller$35param) {
      this[___SpinKitSpinningLinesState__controller] = library$32package$58flutter_spinkit$47src$47spinning_lines$46dart$58$58_controller$35param;
    }
    get [_animation$4]() {
      let t5;
      t5 = this[___SpinKitSpinningLinesState__animation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_animation")) : t5;
    }
    set [_animation$4](library$32package$58flutter_spinkit$47src$47spinning_lines$46dart$58$58_animation$35param) {
      this[___SpinKitSpinningLinesState__animation] = library$32package$58flutter_spinkit$47src$47spinning_lines$46dart$58$58_animation$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$18] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat();
        return t5$;
      })());
      this[_animation$4] = new (T.TweenOfdouble()).new({begin: 0, end: 1}).animate(this[_controller$18]);
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$18].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new transitions.AnimatedBuilder.new({builder: dart.fn((context, child) => new basic.CustomPaint.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size)}), painter: new spinning_lines.SpinningLinesPainter.new(this[_animation$4].value, {lineWidth: this.widget.lineWidth, color: this.widget.color, itemCount: this.widget.itemCount})}), T.BuildContextAndWidgetNToCustomPaint()), animation: this[_animation$4]})});
    }
    static ['_#new#tearOff']() {
      return new spinning_lines._SpinKitSpinningLinesState.new();
    }
  };
  (spinning_lines._SpinKitSpinningLinesState.new = function() {
    this[___SpinKitSpinningLinesState__controller] = null;
    this[___SpinKitSpinningLinesState__animation] = null;
    spinning_lines._SpinKitSpinningLinesState.__proto__.new.call(this);
    ;
  }).prototype = spinning_lines._SpinKitSpinningLinesState.prototype;
  dart.addTypeTests(spinning_lines._SpinKitSpinningLinesState);
  dart.addTypeCaches(spinning_lines._SpinKitSpinningLinesState);
  dart.setMethodSignature(spinning_lines._SpinKitSpinningLinesState, () => ({
    __proto__: dart.getMethods(spinning_lines._SpinKitSpinningLinesState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(spinning_lines._SpinKitSpinningLinesState, () => ({
    __proto__: dart.getGetters(spinning_lines._SpinKitSpinningLinesState.__proto__),
    [_controller$18]: animation_controller.AnimationController,
    [_animation$4]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(spinning_lines._SpinKitSpinningLinesState, () => ({
    __proto__: dart.getSetters(spinning_lines._SpinKitSpinningLinesState.__proto__),
    [_controller$18]: animation_controller.AnimationController,
    [_animation$4]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(spinning_lines._SpinKitSpinningLinesState, I[51]);
  dart.setFieldSignature(spinning_lines._SpinKitSpinningLinesState, () => ({
    __proto__: dart.getFields(spinning_lines._SpinKitSpinningLinesState.__proto__),
    [___SpinKitSpinningLinesState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitSpinningLinesState__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var rotateValue$ = dart.privateName(spinning_lines, "SpinningLinesPainter.rotateValue");
  var lineWidth$2 = dart.privateName(spinning_lines, "SpinningLinesPainter.lineWidth");
  var itemCount$1 = dart.privateName(spinning_lines, "SpinningLinesPainter.itemCount");
  var _linePaint = dart.privateName(spinning_lines, "_linePaint");
  var _drawSpin = dart.privateName(spinning_lines, "_drawSpin");
  var _translateCanvas = dart.privateName(spinning_lines, "_translateCanvas");
  var _getRadian = dart.privateName(spinning_lines, "_getRadian");
  var _rotateCanvas = dart.privateName(spinning_lines, "_rotateCanvas");
  spinning_lines.SpinningLinesPainter = class SpinningLinesPainter extends custom_paint.CustomPainter {
    get rotateValue() {
      return this[rotateValue$];
    }
    set rotateValue(value) {
      super.rotateValue = value;
    }
    get lineWidth() {
      return this[lineWidth$2];
    }
    set lineWidth(value) {
      super.lineWidth = value;
    }
    get itemCount() {
      return this[itemCount$1];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    static ['_#new#tearOff'](rotateValue, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      return new spinning_lines.SpinningLinesPainter.new(rotateValue, {color: color, lineWidth: lineWidth, itemCount: itemCount});
    }
    paint(canvas, size) {
      for (let i = 1; i <= this.itemCount; i = i + 1) {
        this[_drawSpin](canvas, size, this[_linePaint], i);
      }
    }
    [_drawSpin](canvas, size, paint, scale) {
      let scaledSize = size['*'](scale / this.itemCount);
      let spinnerSize = new ui.Size.square(scaledSize.longestSide);
      let startX = spinnerSize.width / 2;
      let startY = spinnerSize.topCenter(ui.Offset.zero).dy;
      let radius = spinnerSize.width / 4;
      let endX = startX;
      let endY = spinnerSize.bottomCenter(ui.Offset.zero).dy;
      let borderWith = this.lineWidth;
      let scaleFactor = -(scale - (this.itemCount + 1));
      let path = ui.Path.new();
      path.moveTo(startX, startY);
      path.arcToPoint(new ui.Offset.new(endX, endY), {radius: new ui.Radius.circular(radius), clockwise: false});
      path.arcToPoint(new ui.Offset.new(startX, startY + borderWith), {radius: new ui.Radius.circular(radius)});
      path.lineTo(startX, startY);
      canvas.save();
      this[_translateCanvas](canvas, size, spinnerSize);
      this[_rotateCanvas](canvas, spinnerSize, this[_getRadian](this.rotateValue * 360 * scaleFactor));
      canvas.drawPath(path, paint);
      canvas.restore();
    }
    [_translateCanvas](canvas, size, spinnerSize) {
      let offset = ui.Offset.as(size['-'](spinnerSize))['/'](2);
      canvas.translate(offset.dx, offset.dy);
    }
    [_rotateCanvas](canvas, size, angle) {
      let r = math.sqrt(size.width * size.width + size.height * size.height) / 2;
      let alpha = math.atan(size.height / size.width);
      let beta = alpha + angle;
      let shiftY = r * math.sin(beta);
      let shiftX = r * math.cos(beta);
      let translateX = size.width / 2 - shiftX;
      let translateY = size.height / 2 - shiftY;
      canvas.translate(translateX, translateY);
      canvas.rotate(angle);
    }
    [_getRadian](angle) {
      return 3.141592653589793 / 180 * angle;
    }
    shouldRepaint(oldDelegate) {
      spinning_lines.SpinningLinesPainter.as(oldDelegate);
      return oldDelegate.rotateValue !== this.rotateValue || oldDelegate.lineWidth !== this.lineWidth || oldDelegate.itemCount !== this.itemCount || !oldDelegate[_linePaint][$_equals](this[_linePaint]);
    }
  };
  (spinning_lines.SpinningLinesPainter.new = function(rotateValue, opts) {
    let t5;
    let color = opts && 'color' in opts ? opts.color : null;
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    this[rotateValue$] = rotateValue;
    this[lineWidth$2] = lineWidth;
    this[itemCount$1] = itemCount;
    this[_linePaint] = (t5 = ui.Paint.new(), (() => {
      t5.color = color;
      t5.strokeWidth = 1;
      t5.style = ui.PaintingStyle.fill;
      return t5;
    })());
    spinning_lines.SpinningLinesPainter.__proto__.new.call(this);
    ;
  }).prototype = spinning_lines.SpinningLinesPainter.prototype;
  dart.addTypeTests(spinning_lines.SpinningLinesPainter);
  dart.addTypeCaches(spinning_lines.SpinningLinesPainter);
  dart.setMethodSignature(spinning_lines.SpinningLinesPainter, () => ({
    __proto__: dart.getMethods(spinning_lines.SpinningLinesPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    [_drawSpin]: dart.fnType(dart.void, [ui.Canvas, ui.Size, ui.Paint, core.int]),
    [_translateCanvas]: dart.fnType(dart.void, [ui.Canvas, ui.Size, ui.Size]),
    [_rotateCanvas]: dart.fnType(dart.void, [ui.Canvas, ui.Size, core.double]),
    [_getRadian]: dart.fnType(core.double, [core.double]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(spinning_lines.SpinningLinesPainter, I[51]);
  dart.setFieldSignature(spinning_lines.SpinningLinesPainter, () => ({
    __proto__: dart.getFields(spinning_lines.SpinningLinesPainter.__proto__),
    rotateValue: dart.finalFieldType(core.double),
    lineWidth: dart.finalFieldType(core.double),
    itemCount: dart.finalFieldType(core.int),
    [_linePaint]: dart.finalFieldType(ui.Paint)
  }));
  var color$22 = dart.privateName(square_circle, "SpinKitSquareCircle.color");
  var size$22 = dart.privateName(square_circle, "SpinKitSquareCircle.size");
  var itemBuilder$16 = dart.privateName(square_circle, "SpinKitSquareCircle.itemBuilder");
  var duration$22 = dart.privateName(square_circle, "SpinKitSquareCircle.duration");
  var controller$21 = dart.privateName(square_circle, "SpinKitSquareCircle.controller");
  square_circle.SpinKitSquareCircle = class SpinKitSquareCircle extends framework.StatefulWidget {
    get color() {
      return this[color$22];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$22];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$16];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$22];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$21];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[62] || CT.C62;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new square_circle.SpinKitSquareCircle.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new square_circle._SpinKitSquareCircleState.new();
    }
  };
  (square_circle.SpinKitSquareCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[62] || CT.C62;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$22] = color;
    this[size$22] = size;
    this[itemBuilder$16] = itemBuilder;
    this[duration$22] = duration;
    this[controller$21] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[52], 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    square_circle.SpinKitSquareCircle.__proto__.new.call(this, {key: key});
    ;
  }).prototype = square_circle.SpinKitSquareCircle.prototype;
  dart.addTypeTests(square_circle.SpinKitSquareCircle);
  dart.addTypeCaches(square_circle.SpinKitSquareCircle);
  dart.setMethodSignature(square_circle.SpinKitSquareCircle, () => ({
    __proto__: dart.getMethods(square_circle.SpinKitSquareCircle.__proto__),
    createState: dart.fnType(square_circle._SpinKitSquareCircleState, [])
  }));
  dart.setLibraryUri(square_circle.SpinKitSquareCircle, I[53]);
  dart.setFieldSignature(square_circle.SpinKitSquareCircle, () => ({
    __proto__: dart.getFields(square_circle.SpinKitSquareCircle.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitSquareCircleState_controller = dart.privateName(square_circle, "_#_SpinKitSquareCircleState#controller");
  var ___SpinKitSquareCircleState_animationCurve = dart.privateName(square_circle, "_#_SpinKitSquareCircleState#animationCurve");
  var ___SpinKitSquareCircleState_animationSize = dart.privateName(square_circle, "_#_SpinKitSquareCircleState#animationSize");
  var _itemBuilder$14 = dart.privateName(square_circle, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$19 = class State_SingleTickerProviderStateMixin extends framework.State$(square_circle.SpinKitSquareCircle) {};
  (State_SingleTickerProviderStateMixin$36$19.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(square_circle.SpinKitSquareCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$19.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$19.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$19, ticker_provider.SingleTickerProviderStateMixin$(square_circle.SpinKitSquareCircle));
  square_circle._SpinKitSquareCircleState = class _SpinKitSquareCircleState extends State_SingleTickerProviderStateMixin$36$19 {
    get controller() {
      let t5;
      t5 = this[___SpinKitSquareCircleState_controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("controller")) : t5;
    }
    set controller(controller$35param) {
      this[___SpinKitSquareCircleState_controller] = controller$35param;
    }
    get animationCurve() {
      let t5;
      t5 = this[___SpinKitSquareCircleState_animationCurve];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("animationCurve")) : t5;
    }
    set animationCurve(animationCurve$35param) {
      this[___SpinKitSquareCircleState_animationCurve] = animationCurve$35param;
    }
    get animationSize() {
      let t5;
      t5 = this[___SpinKitSquareCircleState_animationSize];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("animationSize")) : t5;
    }
    set animationSize(animationSize$35param) {
      this[___SpinKitSquareCircleState_animationSize] = animationSize$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this.controller = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5$.repeat({reverse: true});
        return t5$;
      })());
      let animation = new animations.CurvedAnimation.new({parent: this.controller, curve: curves.Curves.easeInOutCubic});
      this.animationCurve = new (T.TweenOfdouble()).new({begin: 1, end: 0}).animate(animation);
      this.animationSize = new (T.TweenOfdouble()).new({begin: 0.5, end: 1}).animate(animation);
    }
    dispose() {
      if (this.widget.controller == null) {
        this.controller.dispose();
      }
      super.dispose();
    }
    build(context) {
      let t5;
      let sizeValue = this.widget.size * this.animationSize.value;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t5 = vector_math_64.Matrix4.identity(), (() => {
            t5.rotateZ(this.animationCurve.value * 3.141592653589793);
            return t5;
          })()), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(sizeValue), child: this[_itemBuilder$14](0, 0.5 * sizeValue * this.animationCurve.value)})})});
    }
    [_itemBuilder$14](index, curveValue) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(curveValue))})});
    }
    static ['_#new#tearOff']() {
      return new square_circle._SpinKitSquareCircleState.new();
    }
  };
  (square_circle._SpinKitSquareCircleState.new = function() {
    this[___SpinKitSquareCircleState_controller] = null;
    this[___SpinKitSquareCircleState_animationCurve] = null;
    this[___SpinKitSquareCircleState_animationSize] = null;
    square_circle._SpinKitSquareCircleState.__proto__.new.call(this);
    ;
  }).prototype = square_circle._SpinKitSquareCircleState.prototype;
  dart.addTypeTests(square_circle._SpinKitSquareCircleState);
  dart.addTypeCaches(square_circle._SpinKitSquareCircleState);
  dart.setMethodSignature(square_circle._SpinKitSquareCircleState, () => ({
    __proto__: dart.getMethods(square_circle._SpinKitSquareCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$14]: dart.fnType(framework.Widget, [core.int, core.double])
  }));
  dart.setGetterSignature(square_circle._SpinKitSquareCircleState, () => ({
    __proto__: dart.getGetters(square_circle._SpinKitSquareCircleState.__proto__),
    controller: animation_controller.AnimationController,
    animationCurve: animation.Animation$(core.double),
    animationSize: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(square_circle._SpinKitSquareCircleState, () => ({
    __proto__: dart.getSetters(square_circle._SpinKitSquareCircleState.__proto__),
    controller: animation_controller.AnimationController,
    animationCurve: animation.Animation$(core.double),
    animationSize: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(square_circle._SpinKitSquareCircleState, I[53]);
  dart.setFieldSignature(square_circle._SpinKitSquareCircleState, () => ({
    __proto__: dart.getFields(square_circle._SpinKitSquareCircleState.__proto__),
    [___SpinKitSquareCircleState_controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitSquareCircleState_animationCurve]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitSquareCircleState_animationSize]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var color$23 = dart.privateName(three_bounce, "SpinKitThreeBounce.color");
  var size$23 = dart.privateName(three_bounce, "SpinKitThreeBounce.size");
  var itemBuilder$17 = dart.privateName(three_bounce, "SpinKitThreeBounce.itemBuilder");
  var duration$23 = dart.privateName(three_bounce, "SpinKitThreeBounce.duration");
  var controller$22 = dart.privateName(three_bounce, "SpinKitThreeBounce.controller");
  three_bounce.SpinKitThreeBounce = class SpinKitThreeBounce extends framework.StatefulWidget {
    get color() {
      return this[color$23];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$23];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$17];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$23];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$22];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[63] || CT.C63;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new three_bounce.SpinKitThreeBounce.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, controller: controller});
    }
    createState() {
      return new three_bounce._SpinKitThreeBounceState.new();
    }
  };
  (three_bounce.SpinKitThreeBounce.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[63] || CT.C63;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$23] = color;
    this[size$23] = size;
    this[itemBuilder$17] = itemBuilder;
    this[duration$23] = duration;
    this[controller$22] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[54], 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    three_bounce.SpinKitThreeBounce.__proto__.new.call(this, {key: key});
    ;
  }).prototype = three_bounce.SpinKitThreeBounce.prototype;
  dart.addTypeTests(three_bounce.SpinKitThreeBounce);
  dart.addTypeCaches(three_bounce.SpinKitThreeBounce);
  dart.setMethodSignature(three_bounce.SpinKitThreeBounce, () => ({
    __proto__: dart.getMethods(three_bounce.SpinKitThreeBounce.__proto__),
    createState: dart.fnType(three_bounce._SpinKitThreeBounceState, [])
  }));
  dart.setLibraryUri(three_bounce.SpinKitThreeBounce, I[55]);
  dart.setFieldSignature(three_bounce.SpinKitThreeBounce, () => ({
    __proto__: dart.getFields(three_bounce.SpinKitThreeBounce.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitThreeBounceState__controller = dart.privateName(three_bounce, "_#_SpinKitThreeBounceState#_controller");
  var _controller$19 = dart.privateName(three_bounce, "_controller");
  var _itemBuilder$15 = dart.privateName(three_bounce, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$20 = class State_SingleTickerProviderStateMixin extends framework.State$(three_bounce.SpinKitThreeBounce) {};
  (State_SingleTickerProviderStateMixin$36$20.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(three_bounce.SpinKitThreeBounce)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$20.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$20.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$20, ticker_provider.SingleTickerProviderStateMixin$(three_bounce.SpinKitThreeBounce));
  three_bounce._SpinKitThreeBounceState = class _SpinKitThreeBounceState extends State_SingleTickerProviderStateMixin$36$20 {
    get [_controller$19]() {
      let t5;
      t5 = this[___SpinKitThreeBounceState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$19](library$32package$58flutter_spinkit$47src$47three_bounce$46dart$58$58_controller$35param) {
      this[___SpinKitThreeBounceState__controller] = library$32package$58flutter_spinkit$47src$47three_bounce$46dart$58$58_controller$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$19] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.repeat();
        return t5$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$19].dispose();
      }
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.new(this.widget.size * 2, this.widget.size), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.ListOfWidget().generate(3, dart.fn(i => new transitions.ScaleTransition.new({scale: new delay_tween.DelayTween.new({begin: 0, end: 1, delay: i * 0.2}).animate(this[_controller$19]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.5), child: this[_itemBuilder$15](i)})}), T.intToScaleTransition()))})})});
    }
    [_itemBuilder$15](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle})});
    }
    static ['_#new#tearOff']() {
      return new three_bounce._SpinKitThreeBounceState.new();
    }
  };
  (three_bounce._SpinKitThreeBounceState.new = function() {
    this[___SpinKitThreeBounceState__controller] = null;
    three_bounce._SpinKitThreeBounceState.__proto__.new.call(this);
    ;
  }).prototype = three_bounce._SpinKitThreeBounceState.prototype;
  dart.addTypeTests(three_bounce._SpinKitThreeBounceState);
  dart.addTypeCaches(three_bounce._SpinKitThreeBounceState);
  dart.setMethodSignature(three_bounce._SpinKitThreeBounceState, () => ({
    __proto__: dart.getMethods(three_bounce._SpinKitThreeBounceState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$15]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(three_bounce._SpinKitThreeBounceState, () => ({
    __proto__: dart.getGetters(three_bounce._SpinKitThreeBounceState.__proto__),
    [_controller$19]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(three_bounce._SpinKitThreeBounceState, () => ({
    __proto__: dart.getSetters(three_bounce._SpinKitThreeBounceState.__proto__),
    [_controller$19]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(three_bounce._SpinKitThreeBounceState, I[55]);
  dart.setFieldSignature(three_bounce._SpinKitThreeBounceState, () => ({
    __proto__: dart.getFields(three_bounce._SpinKitThreeBounceState.__proto__),
    [___SpinKitThreeBounceState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var color$24 = dart.privateName(three_in_out, "SpinKitThreeInOut.color");
  var size$24 = dart.privateName(three_in_out, "SpinKitThreeInOut.size");
  var itemBuilder$18 = dart.privateName(three_in_out, "SpinKitThreeInOut.itemBuilder");
  var duration$24 = dart.privateName(three_in_out, "SpinKitThreeInOut.duration");
  var delay$ = dart.privateName(three_in_out, "SpinKitThreeInOut.delay");
  var controller$23 = dart.privateName(three_in_out, "SpinKitThreeInOut.controller");
  three_in_out.SpinKitThreeInOut = class SpinKitThreeInOut extends framework.StatefulWidget {
    get color() {
      return this[color$24];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$24];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$18];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$24];
    }
    set duration(value) {
      super.duration = value;
    }
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    get controller() {
      return this[controller$23];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[62] || CT.C62;
      let delay = opts && 'delay' in opts ? opts.delay : C[64] || CT.C64;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new three_in_out.SpinKitThreeInOut.new({key: key, color: color, size: size, itemBuilder: itemBuilder, duration: duration, delay: delay, controller: controller});
    }
    createState() {
      return new three_in_out._SpinKitThreeInOutState.new();
    }
  };
  (three_in_out.SpinKitThreeInOut.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[62] || CT.C62;
    let delay = opts && 'delay' in opts ? opts.delay : C[64] || CT.C64;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$24] = color;
    this[size$24] = size;
    this[itemBuilder$18] = itemBuilder;
    this[duration$24] = duration;
    this[delay$] = delay;
    this[controller$23] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[56], 15, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    three_in_out.SpinKitThreeInOut.__proto__.new.call(this, {key: key});
    ;
  }).prototype = three_in_out.SpinKitThreeInOut.prototype;
  dart.addTypeTests(three_in_out.SpinKitThreeInOut);
  dart.addTypeCaches(three_in_out.SpinKitThreeInOut);
  dart.setMethodSignature(three_in_out.SpinKitThreeInOut, () => ({
    __proto__: dart.getMethods(three_in_out.SpinKitThreeInOut.__proto__),
    createState: dart.fnType(three_in_out._SpinKitThreeInOutState, [])
  }));
  dart.setLibraryUri(three_in_out.SpinKitThreeInOut, I[57]);
  dart.setFieldSignature(three_in_out.SpinKitThreeInOut, () => ({
    __proto__: dart.getFields(three_in_out.SpinKitThreeInOut.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    delay: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitThreeInOutState__controller = dart.privateName(three_in_out, "_#_SpinKitThreeInOutState#_controller");
  var ___SpinKitThreeInOutState__controller_isSet = dart.privateName(three_in_out, "_#_SpinKitThreeInOutState#_controller#isSet");
  var ___SpinKitThreeInOutState__widgets = dart.privateName(three_in_out, "_#_SpinKitThreeInOutState#_widgets");
  var _forwardTimer = dart.privateName(three_in_out, "_forwardTimer");
  var _lastAnim = dart.privateName(three_in_out, "_lastAnim");
  var _controller$20 = dart.privateName(three_in_out, "_controller");
  var _widgets = dart.privateName(three_in_out, "_widgets");
  var _itemBuilder$16 = dart.privateName(three_in_out, "_itemBuilder");
  var _wrapInAnimatedBuilder = dart.privateName(three_in_out, "_wrapInAnimatedBuilder");
  const State_SingleTickerProviderStateMixin$36$21 = class State_SingleTickerProviderStateMixin extends framework.State$(three_in_out.SpinKitThreeInOut) {};
  (State_SingleTickerProviderStateMixin$36$21.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(three_in_out.SpinKitThreeInOut)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$21.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$21.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$21, ticker_provider.SingleTickerProviderStateMixin$(three_in_out.SpinKitThreeInOut));
  three_in_out._SpinKitThreeInOutState = class _SpinKitThreeInOutState extends State_SingleTickerProviderStateMixin$36$21 {
    get [_controller$20]() {
      return this[___SpinKitThreeInOutState__controller_isSet] ? this[___SpinKitThreeInOutState__controller] : dart.throw(new _internal.LateError.fieldNI("_controller"));
    }
    set [_controller$20](library$32package$58flutter_spinkit$47src$47three_in_out$46dart$58$58_controller$35param) {
      this[___SpinKitThreeInOutState__controller_isSet] = true;
      this[___SpinKitThreeInOutState__controller] = library$32package$58flutter_spinkit$47src$47three_in_out$46dart$58$58_controller$35param;
    }
    get [_widgets]() {
      let t5;
      t5 = this[___SpinKitThreeInOutState__widgets];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_widgets")) : t5;
    }
    set [_widgets](library$32package$58flutter_spinkit$47src$47three_in_out$46dart$58$58_widgets$35param) {
      this[___SpinKitThreeInOutState__widgets] = library$32package$58flutter_spinkit$47src$47three_in_out$46dart$58$58_widgets$35param;
    }
    initState() {
      let t5;
      super.initState();
      this[_widgets] = T.ListOfWidget().generate(4, dart.fn(i => new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.5), child: this[_itemBuilder$16](i)}), T.intToSizedBox()));
      this[_controller$20] = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5);
      dart.nullCheck(this[_controller$20]).forward();
      dart.nullCheck(this[_controller$20]).addListener(dart.fn(() => {
        if (this[_lastAnim] > dart.nullCheck(this[_controller$20]).value) {
          this.setState(dart.fn(() => this[_widgets][$insert](0, this[_widgets][$removeLast]()), T.VoidTovoid()));
        }
        this[_lastAnim] = dart.nullCheck(this[_controller$20]).value;
        if (dart.nullCheck(this[_controller$20]).isCompleted) {
          this[_forwardTimer] = async.Timer.new(this.widget.delay, dart.fn(() => {
            let t5;
            t5 = this[_controller$20];
            return t5 == null ? null : t5.forward({from: 0});
          }, T.VoidTovoid()));
        }
      }, T.VoidTovoid()));
    }
    dispose() {
      let t5, t5$;
      if (this.widget.controller == null) {
        t5 = this[_controller$20];
        t5 == null ? null : t5.dispose();
        this[_controller$20] = null;
      }
      t5$ = this[_forwardTimer];
      t5$ == null ? null : t5$.cancel();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.new(this.widget.size * 2, this.widget.size), child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.center, children: this[_widgets][$asMap]()[$map](core.int, framework.Widget, dart.fn((index, value) => {
              let innerWidget = value;
              if (index === 0) {
                innerWidget = this[_wrapInAnimatedBuilder](innerWidget);
              } else if (index === 3) {
                innerWidget = this[_wrapInAnimatedBuilder](innerWidget, {inverse: true});
              }
              return new (T.MapEntryOfint$Widget()).__(index, innerWidget);
            }, T.intAndWidgetToMapEntryOfint$Widget()))[$values][$toList]()})})});
    }
    [_wrapInAnimatedBuilder](innerWidget, opts) {
      let inverse = opts && 'inverse' in opts ? opts.inverse : false;
      return new transitions.AnimatedBuilder.new({animation: dart.nullCheck(this[_controller$20]), child: innerWidget, builder: dart.fn((context, inn) => {
          let value = inverse ? 1 - dart.nullCheck(this[_controller$20]).value : dart.nullCheck(this[_controller$20]).value;
          return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.5 * value), child: new basic.Opacity.new({child: inn, opacity: value})});
        }, T.BuildContextAndWidgetNToSizedBox())});
    }
    [_itemBuilder$16](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle})});
    }
    static ['_#new#tearOff']() {
      return new three_in_out._SpinKitThreeInOutState.new();
    }
  };
  (three_in_out._SpinKitThreeInOutState.new = function() {
    this[___SpinKitThreeInOutState__controller] = null;
    this[___SpinKitThreeInOutState__controller_isSet] = false;
    this[___SpinKitThreeInOutState__widgets] = null;
    this[_forwardTimer] = null;
    this[_lastAnim] = 0;
    three_in_out._SpinKitThreeInOutState.__proto__.new.call(this);
    ;
  }).prototype = three_in_out._SpinKitThreeInOutState.prototype;
  dart.addTypeTests(three_in_out._SpinKitThreeInOutState);
  dart.addTypeCaches(three_in_out._SpinKitThreeInOutState);
  dart.setMethodSignature(three_in_out._SpinKitThreeInOutState, () => ({
    __proto__: dart.getMethods(three_in_out._SpinKitThreeInOutState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_wrapInAnimatedBuilder]: dart.fnType(transitions.AnimatedBuilder, [framework.Widget], {inverse: core.bool}, {}),
    [_itemBuilder$16]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(three_in_out._SpinKitThreeInOutState, () => ({
    __proto__: dart.getGetters(three_in_out._SpinKitThreeInOutState.__proto__),
    [_controller$20]: dart.nullable(animation_controller.AnimationController),
    [_widgets]: core.List$(framework.Widget)
  }));
  dart.setSetterSignature(three_in_out._SpinKitThreeInOutState, () => ({
    __proto__: dart.getSetters(three_in_out._SpinKitThreeInOutState.__proto__),
    [_controller$20]: dart.nullable(animation_controller.AnimationController),
    [_widgets]: core.List$(framework.Widget)
  }));
  dart.setLibraryUri(three_in_out._SpinKitThreeInOutState, I[57]);
  dart.setFieldSignature(three_in_out._SpinKitThreeInOutState, () => ({
    __proto__: dart.getFields(three_in_out._SpinKitThreeInOutState.__proto__),
    [___SpinKitThreeInOutState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitThreeInOutState__controller_isSet]: dart.fieldType(core.bool),
    [___SpinKitThreeInOutState__widgets]: dart.fieldType(dart.nullable(core.List$(framework.Widget))),
    [_forwardTimer]: dart.fieldType(dart.nullable(async.Timer)),
    [_lastAnim]: dart.fieldType(core.double)
  }));
  var color$25 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.color");
  var shape$2 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.shape");
  var offset = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.offset");
  var size$25 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.size");
  var itemBuilder$19 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.itemBuilder");
  var duration$25 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.duration");
  wandering_cubes.SpinKitWanderingCubes = class SpinKitWanderingCubes extends framework.StatefulWidget {
    get color() {
      return this[color$25];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$2];
    }
    set shape(value) {
      super.shape = value;
    }
    get offset() {
      return this[offset];
    }
    set offset(value) {
      super.offset = value;
    }
    get size() {
      return this[size$25];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$19];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$25];
    }
    set duration(value) {
      super.duration = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shape = opts && 'shape' in opts ? opts.shape : C[65] || CT.C65;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[56] || CT.C56;
      return new wandering_cubes.SpinKitWanderingCubes.new({key: key, color: color, shape: shape, size: size, itemBuilder: itemBuilder, duration: duration});
    }
    createState() {
      return new wandering_cubes._SpinKitWanderingCubesState.new();
    }
  };
  (wandering_cubes.SpinKitWanderingCubes.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C[65] || CT.C65;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C[56] || CT.C56;
    this[color$25] = color;
    this[shape$2] = shape;
    this[size$25] = size;
    this[itemBuilder$19] = itemBuilder;
    this[duration$25] = duration;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[58], 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    this[offset] = size * 0.75;
    wandering_cubes.SpinKitWanderingCubes.__proto__.new.call(this, {key: key});
    ;
  }).prototype = wandering_cubes.SpinKitWanderingCubes.prototype;
  dart.addTypeTests(wandering_cubes.SpinKitWanderingCubes);
  dart.addTypeCaches(wandering_cubes.SpinKitWanderingCubes);
  dart.setMethodSignature(wandering_cubes.SpinKitWanderingCubes, () => ({
    __proto__: dart.getMethods(wandering_cubes.SpinKitWanderingCubes.__proto__),
    createState: dart.fnType(wandering_cubes._SpinKitWanderingCubesState, [])
  }));
  dart.setLibraryUri(wandering_cubes.SpinKitWanderingCubes, I[59]);
  dart.setFieldSignature(wandering_cubes.SpinKitWanderingCubes, () => ({
    __proto__: dart.getFields(wandering_cubes.SpinKitWanderingCubes.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    shape: dart.finalFieldType(box_border.BoxShape),
    offset: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration)
  }));
  var ___SpinKitWanderingCubesState__controller = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_controller");
  var ___SpinKitWanderingCubesState__scale1 = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_scale1");
  var ___SpinKitWanderingCubesState__scale2 = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_scale2");
  var ___SpinKitWanderingCubesState__scale3 = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_scale3");
  var ___SpinKitWanderingCubesState__scale4 = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_scale4");
  var ___SpinKitWanderingCubesState__rotate = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_rotate");
  var ___SpinKitWanderingCubesState__translate1 = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_translate1");
  var ___SpinKitWanderingCubesState__translate2 = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_translate2");
  var ___SpinKitWanderingCubesState__translate3 = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_translate3");
  var ___SpinKitWanderingCubesState__translate4 = dart.privateName(wandering_cubes, "_#_SpinKitWanderingCubesState#_translate4");
  var _controller$21 = dart.privateName(wandering_cubes, "_controller");
  var _scale1 = dart.privateName(wandering_cubes, "_scale1");
  var _scale2 = dart.privateName(wandering_cubes, "_scale2");
  var _scale3 = dart.privateName(wandering_cubes, "_scale3");
  var _scale4 = dart.privateName(wandering_cubes, "_scale4");
  var _rotate$ = dart.privateName(wandering_cubes, "_rotate");
  var _translate1 = dart.privateName(wandering_cubes, "_translate1");
  var _translate2 = dart.privateName(wandering_cubes, "_translate2");
  var _translate3 = dart.privateName(wandering_cubes, "_translate3");
  var _translate4 = dart.privateName(wandering_cubes, "_translate4");
  var _cube$ = dart.privateName(wandering_cubes, "_cube");
  var _itemBuilder$17 = dart.privateName(wandering_cubes, "_itemBuilder");
  const State_SingleTickerProviderStateMixin$36$22 = class State_SingleTickerProviderStateMixin extends framework.State$(wandering_cubes.SpinKitWanderingCubes) {};
  (State_SingleTickerProviderStateMixin$36$22.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(wandering_cubes.SpinKitWanderingCubes)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$22.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$22.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$22, ticker_provider.SingleTickerProviderStateMixin$(wandering_cubes.SpinKitWanderingCubes));
  wandering_cubes._SpinKitWanderingCubesState = class _SpinKitWanderingCubesState extends State_SingleTickerProviderStateMixin$36$22 {
    get [_controller$21]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$21](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_controller$35param) {
      this[___SpinKitWanderingCubesState__controller] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_controller$35param;
    }
    get [_scale1]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__scale1];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_scale1")) : t5;
    }
    set [_scale1](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_scale1$35param) {
      this[___SpinKitWanderingCubesState__scale1] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_scale1$35param;
    }
    get [_scale2]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__scale2];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_scale2")) : t5;
    }
    set [_scale2](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_scale2$35param) {
      this[___SpinKitWanderingCubesState__scale2] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_scale2$35param;
    }
    get [_scale3]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__scale3];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_scale3")) : t5;
    }
    set [_scale3](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_scale3$35param) {
      this[___SpinKitWanderingCubesState__scale3] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_scale3$35param;
    }
    get [_scale4]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__scale4];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_scale4")) : t5;
    }
    set [_scale4](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_scale4$35param) {
      this[___SpinKitWanderingCubesState__scale4] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_scale4$35param;
    }
    get [_rotate$]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__rotate];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_rotate")) : t5;
    }
    set [_rotate$](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_rotate$35param) {
      this[___SpinKitWanderingCubesState__rotate] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_rotate$35param;
    }
    get [_translate1]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__translate1];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_translate1")) : t5;
    }
    set [_translate1](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_translate1$35param) {
      this[___SpinKitWanderingCubesState__translate1] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_translate1$35param;
    }
    get [_translate2]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__translate2];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_translate2")) : t5;
    }
    set [_translate2](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_translate2$35param) {
      this[___SpinKitWanderingCubesState__translate2] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_translate2$35param;
    }
    get [_translate3]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__translate3];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_translate3")) : t5;
    }
    set [_translate3](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_translate3$35param) {
      this[___SpinKitWanderingCubesState__translate3] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_translate3$35param;
    }
    get [_translate4]() {
      let t5;
      t5 = this[___SpinKitWanderingCubesState__translate4];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_translate4")) : t5;
    }
    set [_translate4](library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_translate4$35param) {
      this[___SpinKitWanderingCubesState__translate4] = library$32package$58flutter_spinkit$47src$47wandering_cubes$46dart$58$58_translate4$35param;
    }
    initState() {
      let t5;
      super.initState();
      this[_controller$21] = (t5 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), (() => {
        t5.addListener(dart.fn(() => this.setState(dart.fn(() => {
        }, T.VoidTovoid())), T.VoidTovoid()));
        t5.repeat();
        return t5;
      })());
      let animation1 = new animations.CurvedAnimation.new({parent: this[_controller$21], curve: C[66] || CT.C66});
      this[_translate1] = new (T.TweenOfdouble()).new({begin: 0, end: this.widget.offset}).animate(animation1);
      this[_scale1] = new (T.TweenOfdouble()).new({begin: 1, end: 0.5}).animate(animation1);
      let animation2 = new animations.CurvedAnimation.new({parent: this[_controller$21], curve: C[68] || CT.C68});
      this[_translate2] = new (T.TweenOfdouble()).new({begin: 0, end: this.widget.offset}).animate(animation2);
      this[_scale2] = new (T.TweenOfdouble()).new({begin: 1, end: 2}).animate(animation2);
      let animation3 = new animations.CurvedAnimation.new({parent: this[_controller$21], curve: C[69] || CT.C69});
      this[_translate3] = new (T.TweenOfdouble()).new({begin: 0, end: -this.widget.offset}).animate(animation3);
      this[_scale3] = new (T.TweenOfdouble()).new({begin: 1, end: 0.5}).animate(animation3);
      let animation4 = new animations.CurvedAnimation.new({parent: this[_controller$21], curve: C[70] || CT.C70});
      this[_translate4] = new (T.TweenOfdouble()).new({begin: 0, end: -this.widget.offset}).animate(animation4);
      this[_scale4] = new (T.TweenOfdouble()).new({begin: 1, end: 2}).animate(animation4);
      this[_rotate$] = new (T.TweenOfdouble()).new({begin: 0, end: 360}).animate(new animations.CurvedAnimation.new({parent: this[_controller$21], curve: curves.Curves.linear}));
    }
    dispose() {
      this[_controller$21].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: T.JSArrayOfWidget().of([this[_cube$](0), this[_cube$](1, true)])})})});
    }
    [_cube$](index, offset = false) {
      let t5, t5$, t5$0;
      let _tTranslate = null;
      if (offset === true) {
        _tTranslate = (t5 = vector_math_64.Matrix4.identity(), (() => {
          t5.translate(this[_translate3].value, 0);
          t5.translate(0, this[_translate2].value);
          t5.translate(0, this[_translate4].value);
          t5.translate(this[_translate1].value, 0);
          return t5;
        })());
      } else {
        _tTranslate = (t5$ = vector_math_64.Matrix4.identity(), (() => {
          t5$.translate(0, this[_translate3].value);
          t5$.translate(-this[_translate2].value, 0);
          t5$.translate(-this[_translate4].value, 0);
          t5$.translate(0, this[_translate1].value);
          return t5$;
        })());
      }
      return new basic.Positioned.new({top: 0, left: offset === true ? 0 : this.widget.offset, child: new basic.Transform.new({transform: _tTranslate, child: new basic.Transform.rotate({angle: this[_rotate$].value * 0.0174533, child: new basic.Transform.new({transform: (t5$0 = vector_math_64.Matrix4.identity(), (() => {
                t5$0.scale(this[_scale2].value);
                t5$0.scale(this[_scale3].value);
                t5$0.scale(this[_scale4].value);
                t5$0.scale(this[_scale1].value);
                return t5$0;
              })()), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size * 0.25), child: this[_itemBuilder$17](index)})})})})});
    }
    [_itemBuilder$17](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape})});
    }
    static ['_#new#tearOff']() {
      return new wandering_cubes._SpinKitWanderingCubesState.new();
    }
  };
  (wandering_cubes._SpinKitWanderingCubesState.new = function() {
    this[___SpinKitWanderingCubesState__controller] = null;
    this[___SpinKitWanderingCubesState__scale1] = null;
    this[___SpinKitWanderingCubesState__scale2] = null;
    this[___SpinKitWanderingCubesState__scale3] = null;
    this[___SpinKitWanderingCubesState__scale4] = null;
    this[___SpinKitWanderingCubesState__rotate] = null;
    this[___SpinKitWanderingCubesState__translate1] = null;
    this[___SpinKitWanderingCubesState__translate2] = null;
    this[___SpinKitWanderingCubesState__translate3] = null;
    this[___SpinKitWanderingCubesState__translate4] = null;
    wandering_cubes._SpinKitWanderingCubesState.__proto__.new.call(this);
    ;
  }).prototype = wandering_cubes._SpinKitWanderingCubesState.prototype;
  dart.addTypeTests(wandering_cubes._SpinKitWanderingCubesState);
  dart.addTypeCaches(wandering_cubes._SpinKitWanderingCubesState);
  dart.setMethodSignature(wandering_cubes._SpinKitWanderingCubesState, () => ({
    __proto__: dart.getMethods(wandering_cubes._SpinKitWanderingCubesState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_cube$]: dart.fnType(framework.Widget, [core.int], [core.bool]),
    [_itemBuilder$17]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(wandering_cubes._SpinKitWanderingCubesState, () => ({
    __proto__: dart.getGetters(wandering_cubes._SpinKitWanderingCubesState.__proto__),
    [_controller$21]: animation_controller.AnimationController,
    [_scale1]: animation.Animation$(core.double),
    [_scale2]: animation.Animation$(core.double),
    [_scale3]: animation.Animation$(core.double),
    [_scale4]: animation.Animation$(core.double),
    [_rotate$]: animation.Animation$(core.double),
    [_translate1]: animation.Animation$(core.double),
    [_translate2]: animation.Animation$(core.double),
    [_translate3]: animation.Animation$(core.double),
    [_translate4]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(wandering_cubes._SpinKitWanderingCubesState, () => ({
    __proto__: dart.getSetters(wandering_cubes._SpinKitWanderingCubesState.__proto__),
    [_controller$21]: animation_controller.AnimationController,
    [_scale1]: animation.Animation$(core.double),
    [_scale2]: animation.Animation$(core.double),
    [_scale3]: animation.Animation$(core.double),
    [_scale4]: animation.Animation$(core.double),
    [_rotate$]: animation.Animation$(core.double),
    [_translate1]: animation.Animation$(core.double),
    [_translate2]: animation.Animation$(core.double),
    [_translate3]: animation.Animation$(core.double),
    [_translate4]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(wandering_cubes._SpinKitWanderingCubesState, I[59]);
  dart.setFieldSignature(wandering_cubes._SpinKitWanderingCubesState, () => ({
    __proto__: dart.getFields(wandering_cubes._SpinKitWanderingCubesState.__proto__),
    [___SpinKitWanderingCubesState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [___SpinKitWanderingCubesState__scale1]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitWanderingCubesState__scale2]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitWanderingCubesState__scale3]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitWanderingCubesState__scale4]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitWanderingCubesState__rotate]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitWanderingCubesState__translate1]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitWanderingCubesState__translate2]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitWanderingCubesState__translate3]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [___SpinKitWanderingCubesState__translate4]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  wave.SpinKitWaveType = class SpinKitWaveType extends core._Enum {
    toString() {
      return "SpinKitWaveType." + this[_name];
    }
  };
  (wave.SpinKitWaveType.new = function(index, name) {
    wave.SpinKitWaveType.__proto__.new.call(this, index, name);
    ;
  }).prototype = wave.SpinKitWaveType.prototype;
  dart.addTypeTests(wave.SpinKitWaveType);
  dart.addTypeCaches(wave.SpinKitWaveType);
  dart.setLibraryUri(wave.SpinKitWaveType, I[60]);
  dart.setStaticFieldSignature(wave.SpinKitWaveType, () => ['values', 'start', 'end', 'center']);
  dart.defineExtensionMethods(wave.SpinKitWaveType, ['toString']);
  dart.defineLazy(wave.SpinKitWaveType, {
    /*wave.SpinKitWaveType.values*/get values() {
      return C[71] || CT.C71;
    },
    /*wave.SpinKitWaveType.start*/get start() {
      return C[72] || CT.C72;
    },
    /*wave.SpinKitWaveType.end*/get end() {
      return C[73] || CT.C73;
    },
    /*wave.SpinKitWaveType.center*/get center() {
      return C[74] || CT.C74;
    }
  }, false);
  var color$26 = dart.privateName(wave, "SpinKitWave.color");
  var itemCount$2 = dart.privateName(wave, "SpinKitWave.itemCount");
  var size$26 = dart.privateName(wave, "SpinKitWave.size");
  var type$0 = dart.privateName(wave, "SpinKitWave.type");
  var itemBuilder$20 = dart.privateName(wave, "SpinKitWave.itemBuilder");
  var duration$26 = dart.privateName(wave, "SpinKitWave.duration");
  var controller$24 = dart.privateName(wave, "SpinKitWave.controller");
  wave.SpinKitWave = class SpinKitWave extends framework.StatefulWidget {
    get color() {
      return this[color$26];
    }
    set color(value) {
      super.color = value;
    }
    get itemCount() {
      return this[itemCount$2];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get size() {
      return this[size$26];
    }
    set size(value) {
      super.size = value;
    }
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get itemBuilder() {
      return this[itemBuilder$20];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$26];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$24];
    }
    set controller(value) {
      super.controller = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let type = opts && 'type' in opts ? opts.type : C[72] || CT.C72;
      let size = opts && 'size' in opts ? opts.size : 50;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : 5;
      let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new wave.SpinKitWave.new({key: key, color: color, type: type, size: size, itemBuilder: itemBuilder, itemCount: itemCount, duration: duration, controller: controller});
    }
    createState() {
      return new wave._SpinKitWaveState.new();
    }
  };
  (wave.SpinKitWave.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let type = opts && 'type' in opts ? opts.type : C[72] || CT.C72;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : 5;
    let duration = opts && 'duration' in opts ? opts.duration : C[29] || CT.C29;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[color$26] = color;
    this[type$0] = type;
    this[size$26] = size;
    this[itemBuilder$20] = itemBuilder;
    this[itemCount$2] = itemCount;
    this[duration$26] = duration;
    this[controller$24] = controller;
    if (!(!(T.BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", I[61], 16, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(itemCount >= 2)) dart.assertFailed("itemCount Cant be less then 2 ", I[61], 18, 16, "itemCount >= 2");
    wave.SpinKitWave.__proto__.new.call(this, {key: key});
    ;
  }).prototype = wave.SpinKitWave.prototype;
  dart.addTypeTests(wave.SpinKitWave);
  dart.addTypeCaches(wave.SpinKitWave);
  dart.setMethodSignature(wave.SpinKitWave, () => ({
    __proto__: dart.getMethods(wave.SpinKitWave.__proto__),
    createState: dart.fnType(wave._SpinKitWaveState, [])
  }));
  dart.setLibraryUri(wave.SpinKitWave, I[60]);
  dart.setFieldSignature(wave.SpinKitWave, () => ({
    __proto__: dart.getFields(wave.SpinKitWave.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    itemCount: dart.finalFieldType(core.int),
    size: dart.finalFieldType(core.double),
    type: dart.finalFieldType(wave.SpinKitWaveType),
    itemBuilder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, core.int]))),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var ___SpinKitWaveState__controller = dart.privateName(wave, "_#_SpinKitWaveState#_controller");
  var _controller$22 = dart.privateName(wave, "_controller");
  var _itemBuilder$18 = dart.privateName(wave, "_itemBuilder");
  var _startAnimationDelay$ = dart.privateName(wave, "_startAnimationDelay");
  var _endAnimationDelay$ = dart.privateName(wave, "_endAnimationDelay");
  var _centerAnimationDelay$ = dart.privateName(wave, "_centerAnimationDelay");
  const State_SingleTickerProviderStateMixin$36$23 = class State_SingleTickerProviderStateMixin extends framework.State$(wave.SpinKitWave) {};
  (State_SingleTickerProviderStateMixin$36$23.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(wave.SpinKitWave)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$23.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$23.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$23, ticker_provider.SingleTickerProviderStateMixin$(wave.SpinKitWave));
  wave._SpinKitWaveState = class _SpinKitWaveState extends State_SingleTickerProviderStateMixin$36$23 {
    get [_controller$22]() {
      let t5;
      t5 = this[___SpinKitWaveState__controller];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t5;
    }
    set [_controller$22](library$32package$58flutter_spinkit$47src$47wave$46dart$58$58_controller$35param) {
      this[___SpinKitWaveState__controller] = library$32package$58flutter_spinkit$47src$47wave$46dart$58$58_controller$35param;
    }
    initState() {
      let t5, t5$;
      super.initState();
      this[_controller$22] = (t5$ = (t5 = this.widget.controller, t5 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t5), (() => {
        t5$.repeat();
        return t5$;
      })());
    }
    dispose() {
      if (this.widget.controller == null) {
        this[_controller$22].dispose();
      }
      super.dispose();
    }
    build(context) {
      let _bars = this.getAnimationDelay(this.widget.itemCount);
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.new(this.widget.size * 1.25, this.widget.size), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.ListOfWidget().generate(_bars[$length], dart.fn(i => new wave.ScaleYWidget.new({scaleY: new delay_tween.DelayTween.new({begin: 0.4, end: 1, delay: _bars[$_get](i)}).animate(this[_controller$22]), child: new basic.SizedBox.fromSize({size: new ui.Size.new(this.widget.size / this.widget.itemCount, this.widget.size), child: this[_itemBuilder$18](i)})}), T.intToScaleYWidget()))})})});
    }
    getAnimationDelay(itemCount) {
      switch (this.widget.type) {
        case C[72] || CT.C72:
          {
            return this[_startAnimationDelay$](itemCount);
          }
        case C[73] || CT.C73:
          {
            return this[_endAnimationDelay$](itemCount);
          }
        case C[74] || CT.C74:
        default:
          {
            return this[_centerAnimationDelay$](itemCount);
          }
      }
    }
    [_startAnimationDelay$](count) {
      return (() => {
        let t5 = T.ListOfdouble().of(T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 - index * 0.1 - 0.1, T.intTodouble()))[$reversed]);
        if (count[$isOdd]) t5.push(-1);
        t5[$addAll](T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 + index * 0.1 + (count[$isOdd] ? 0.1 : 0), T.intTodouble())));
        return t5;
      })();
    }
    [_endAnimationDelay$](count) {
      return (() => {
        let t6 = T.ListOfdouble().of(T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 + index * 0.1 + 0.1, T.intTodouble()))[$reversed]);
        if (count[$isOdd]) t6.push(-1);
        t6[$addAll](T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 - index * 0.1 - (count[$isOdd] ? 0.1 : 0), T.intTodouble())));
        return t6;
      })();
    }
    [_centerAnimationDelay$](count) {
      return (() => {
        let t7 = T.ListOfdouble().of(T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 + index * 0.2 + 0.2, T.intTodouble()))[$reversed]);
        if (count[$isOdd]) t7.push(-1);
        t7[$addAll](T.ListOfdouble().generate((count / 2)[$truncate](), dart.fn(index => -1 + index * 0.2 + 0.2, T.intTodouble())));
        return t7;
      })();
    }
    [_itemBuilder$18](index) {
      return this.widget.itemBuilder != null ? dart.nullCheck(this.widget.itemBuilder)(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color})});
    }
    static ['_#new#tearOff']() {
      return new wave._SpinKitWaveState.new();
    }
  };
  (wave._SpinKitWaveState.new = function() {
    this[___SpinKitWaveState__controller] = null;
    wave._SpinKitWaveState.__proto__.new.call(this);
    ;
  }).prototype = wave._SpinKitWaveState.prototype;
  dart.addTypeTests(wave._SpinKitWaveState);
  dart.addTypeCaches(wave._SpinKitWaveState);
  dart.setMethodSignature(wave._SpinKitWaveState, () => ({
    __proto__: dart.getMethods(wave._SpinKitWaveState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getAnimationDelay: dart.fnType(core.List$(core.double), [core.int]),
    [_startAnimationDelay$]: dart.fnType(core.List$(core.double), [core.int]),
    [_endAnimationDelay$]: dart.fnType(core.List$(core.double), [core.int]),
    [_centerAnimationDelay$]: dart.fnType(core.List$(core.double), [core.int]),
    [_itemBuilder$18]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setGetterSignature(wave._SpinKitWaveState, () => ({
    __proto__: dart.getGetters(wave._SpinKitWaveState.__proto__),
    [_controller$22]: animation_controller.AnimationController
  }));
  dart.setSetterSignature(wave._SpinKitWaveState, () => ({
    __proto__: dart.getSetters(wave._SpinKitWaveState.__proto__),
    [_controller$22]: animation_controller.AnimationController
  }));
  dart.setLibraryUri(wave._SpinKitWaveState, I[60]);
  dart.setFieldSignature(wave._SpinKitWaveState, () => ({
    __proto__: dart.getFields(wave._SpinKitWaveState.__proto__),
    [___SpinKitWaveState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController))
  }));
  var child$0 = dart.privateName(wave, "ScaleYWidget.child");
  var alignment$0 = dart.privateName(wave, "ScaleYWidget.alignment");
  wave.ScaleYWidget = class ScaleYWidget extends transitions.AnimatedWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scaleY = opts && 'scaleY' in opts ? opts.scaleY : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[46] || CT.C46;
      return new wave.ScaleYWidget.new({key: key, scaleY: scaleY, child: child, alignment: alignment});
    }
    get scale() {
      return T.AnimationOfdouble().as(this.listenable);
    }
    build(context) {
      let t8;
      return new basic.Transform.new({transform: (t8 = vector_math_64.Matrix4.identity(), (() => {
          t8.scale(1, this.scale.value, 1);
          return t8;
        })()), alignment: this.alignment, child: this.child});
    }
  };
  (wave.ScaleYWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scaleY = opts && 'scaleY' in opts ? opts.scaleY : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[46] || CT.C46;
    this[child$0] = child;
    this[alignment$0] = alignment;
    wave.ScaleYWidget.__proto__.new.call(this, {key: key, listenable: scaleY});
    ;
  }).prototype = wave.ScaleYWidget.prototype;
  dart.addTypeTests(wave.ScaleYWidget);
  dart.addTypeCaches(wave.ScaleYWidget);
  dart.setMethodSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getMethods(wave.ScaleYWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getGetters(wave.ScaleYWidget.__proto__),
    scale: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(wave.ScaleYWidget, I[60]);
  dart.setFieldSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getFields(wave.ScaleYWidget.__proto__),
    child: dart.finalFieldType(framework.Widget),
    alignment: dart.finalFieldType(alignment.Alignment)
  }));
  var delay$0 = dart.privateName(delay_tween, "DelayTween.delay");
  delay_tween.DelayTween = class DelayTween extends tween.Tween$(core.double) {
    get delay() {
      return this[delay$0];
    }
    set delay(value) {
      super.delay = value;
    }
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      let delay = opts && 'delay' in opts ? opts.delay : null;
      return new delay_tween.DelayTween.new({begin: begin, end: end, delay: delay});
    }
    lerp(t) {
      return super.lerp((math.sin((t - this.delay) * 2 * 3.141592653589793) + 1) / 2);
    }
    evaluate(animation) {
      return this.lerp(animation.value);
    }
  };
  (delay_tween.DelayTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    let delay = opts && 'delay' in opts ? opts.delay : null;
    this[delay$0] = delay;
    delay_tween.DelayTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = delay_tween.DelayTween.prototype;
  dart.addTypeTests(delay_tween.DelayTween);
  dart.addTypeCaches(delay_tween.DelayTween);
  dart.setLibraryUri(delay_tween.DelayTween, I[62]);
  dart.setFieldSignature(delay_tween.DelayTween, () => ({
    __proto__: dart.getFields(delay_tween.DelayTween.__proto__),
    delay: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "package:flutter_app/View/Products.dart": Products,
    "package:flutter_app/View/register.dart": register,
    "package:flutter_app/View/Login.dart": Login,
    "package:flutter_app/Controller/App.dart": App,
    "package:flutter_app/View/Loading.dart": Loading,
    "package:flutter_app/Model/Form.dart": Form,
    "package:flutter_app/Model/Store.dart": Store,
    "package:flutter_app/View/list.dart": list,
    "package:flutter_app/View/info.dart": info,
    "package:flutter_app/View/cart.dart": cart,
    "package:flutter_spinkit/flutter_spinkit.dart": flutter_spinkit,
    "package:flutter_app/View/feed.dart": feed,
    "package:flutter_spinkit/src/chasing_dots.dart": chasing_dots,
    "package:flutter_spinkit/src/circle.dart": circle,
    "package:flutter_spinkit/src/cube_grid.dart": cube_grid,
    "package:flutter_spinkit/src/dancing_square.dart": dancing_square,
    "package:flutter_spinkit/src/double_bounce.dart": double_bounce,
    "package:flutter_spinkit/src/dual_ring.dart": dual_ring,
    "package:flutter_spinkit/src/fading_circle.dart": fading_circle,
    "package:flutter_spinkit/src/fading_cube.dart": fading_cube,
    "package:flutter_spinkit/src/fading_four.dart": fading_four,
    "package:flutter_spinkit/src/fading_grid.dart": fading_grid,
    "package:flutter_spinkit/src/folding_cube.dart": folding_cube,
    "package:flutter_spinkit/src/hour_glass.dart": hour_glass,
    "package:flutter_spinkit/src/piano_wave.dart": piano_wave,
    "package:flutter_spinkit/src/pouring_hour_glass.dart": pouring_hour_glass,
    "package:flutter_spinkit/src/pouring_hour_glass_refined.dart": pouring_hour_glass_refined,
    "package:flutter_spinkit/src/pulse.dart": pulse,
    "package:flutter_spinkit/src/pumping_heart.dart": pumping_heart,
    "package:flutter_spinkit/src/ring.dart": ring,
    "package:flutter_spinkit/src/ripple.dart": ripple,
    "package:flutter_spinkit/src/rotating_circle.dart": rotating_circle,
    "package:flutter_spinkit/src/rotating_plain.dart": rotating_plain,
    "package:flutter_spinkit/src/spinning_circle.dart": spinning_circle,
    "package:flutter_spinkit/src/spinning_lines.dart": spinning_lines,
    "package:flutter_spinkit/src/square_circle.dart": square_circle,
    "package:flutter_spinkit/src/three_bounce.dart": three_bounce,
    "package:flutter_spinkit/src/three_in_out.dart": three_in_out,
    "package:flutter_spinkit/src/wandering_cubes.dart": wandering_cubes,
    "package:flutter_spinkit/src/wave.dart": wave,
    "package:flutter_spinkit/src/tweens/delay_tween.dart": delay_tween
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/lib/View/Products.dart","/zapp/project/lib/View/register.dart","/zapp/project/lib/View/Login.dart","/zapp/project/lib/Controller/App.dart","/zapp/project/lib/View/Loading.dart","/zapp/project/lib/Model/Form.dart","/zapp/project/lib/Model/Store.dart","/zapp/project/lib/View/list.dart","/zapp/project/lib/View/info.dart","/zapp/project/lib/View/cart.dart","/zapp/project/lib/View/feed.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/chasing_dots.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/circle.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/cube_grid.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/dancing_square.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/double_bounce.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/dual_ring.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/fading_circle.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/fading_cube.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/fading_four.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/fading_grid.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/folding_cube.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/hour_glass.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/piano_wave.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/pouring_hour_glass.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/pouring_hour_glass_refined.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/pulse.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/pumping_heart.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/ring.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/ripple.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/rotating_circle.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/rotating_plain.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/spinning_circle.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/spinning_lines.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/square_circle.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/three_bounce.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/three_in_out.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/wandering_cubes.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/wave.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_spinkit-5.1.0/lib/src/tweens/delay_tween.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    View__Products: Products,
    View__register: register,
    View__Login: Login,
    Controller__App: App,
    View__Loading: Loading,
    Model__Form: Form,
    Model__Store: Store,
    View__list: list,
    View__info: info,
    View__cart: cart,
    flutter_spinkit: flutter_spinkit,
    View__feed: feed,
    src__chasing_dots: chasing_dots,
    src__circle: circle,
    src__cube_grid: cube_grid,
    src__dancing_square: dancing_square,
    src__double_bounce: double_bounce,
    src__dual_ring: dual_ring,
    src__fading_circle: fading_circle,
    src__fading_cube: fading_cube,
    src__fading_four: fading_four,
    src__fading_grid: fading_grid,
    src__folding_cube: folding_cube,
    src__hour_glass: hour_glass,
    src__piano_wave: piano_wave,
    src__pouring_hour_glass: pouring_hour_glass,
    src__pouring_hour_glass_refined: pouring_hour_glass_refined,
    src__pulse: pulse,
    src__pumping_heart: pumping_heart,
    src__ring: ring,
    src__ripple: ripple,
    src__rotating_circle: rotating_circle,
    src__rotating_plain: rotating_plain,
    src__spinning_circle: spinning_circle,
    src__spinning_lines: spinning_lines,
    src__square_circle: square_circle,
    src__three_bounce: three_bounce,
    src__three_in_out: three_in_out,
    src__wandering_cubes: wandering_cubes,
    src__wave: wave,
    src__tweens__delay_tween: delay_tween
  };
}));

//# sourceMappingURL=main.js.map
