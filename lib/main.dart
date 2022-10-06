import 'package:flutter/material.dart';
import 'package:flutter_app/View/Products.dart';
import 'package:flutter_app/View/register.dart';
import 'package:flutter_app/View/Login.dart';
import 'package:flutter_app/Controller/App.dart';
import 'package:flutter_app/View/Loading.dart';
import 'package:flutter_app/Model/Form.dart';
void main() => runApp(
AppWight()
);

class AppWight extends StatelessWidget {
  const AppWight({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return (AnimatedBuilder(
      animation: AppController.instance,
      builder: (context, child) {
        return MaterialApp(
          theme: ThemeData(
            primarySwatch: Colors.blue,
            brightness: AppController.instance.isLight
                ? Brightness.light
                : Brightness.dark,
          ),
          initialRoute: '/login',
          routes: {
            '/login': (context) => LoadingPage(),
            '/': (context) => LoginPage(),
            '/home': (context) => HomePage(),
            '/form': (context) => FormPage(),
            '/register' : (context) => RegisterPage(),
            '/galery' : (context) => MyGalery(),
          },
        );
      },
    ));
  }
}

class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() {
    return HomePageState();
  }
}

class HomePageState extends State<HomePage> {
  int counter = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text(
            'Home Page',
          ),
          actions: [CustomSwitch()]),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          /* crossAxisAlignment: CrossAxisAlignment.stretch, */
          children: [
            Text('Contador : $counter'),
            Container(
              /*apenas para afastar o Text do Custom*/
              height: 20,
            ),
            CustomSwitch(),
            Container(
              /*apenas para afastar a coluna da linha(Custom dos quadrados*/
              height: 50,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  width: 50,
                  height: 50,
                  color: Colors.red,
                ),
                Container(
                  width: 50,
                  height: 50,
                  color: Colors.blue,
                ),
                Container(
                  width: 50,
                  height: 50,
                  color: Colors.green,
                )
              ],
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: () {
            setState(() {
              counter++;
            });
          }),
    );
  }
}

class CustomSwitch extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return (Switch(
        value: AppController.instance.isLight,
        onChanged: (value) {
          AppController.instance.changeTheme();
        }));
  }
}
