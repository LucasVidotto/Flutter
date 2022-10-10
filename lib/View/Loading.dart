import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class LoadingPage extends StatefulWidget {
  const LoadingPage({Key? key}) : super(key: key);

  @override
  State<LoadingPage> createState() => _LoadingPageState();
}

class _LoadingPageState extends State<LoadingPage> {
  void Timer() {
   Navigator.pushReplacementNamed(context, '/');
  }
  
  
  @override
  Widget build(BuildContext context) {
    Future.delayed(Duration(milliseconds: 1000), () {
    /* void initState(){
        super.initState(); */
        Timer();
    /* } */
    });
    return  Scaffold(
      backgroundColor: Colors.blue[900],
      body: Center(
        child: SpinKitCubeGrid(
        color: Colors.white,
        size: 90.0,
      ),
      )
    );
  }
}