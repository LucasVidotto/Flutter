import 'package:flutter/material.dart';

class FormPage extends StatefulWidget {
  const FormPage({Key? key}) : super(key: key);

  @override
  FormPageState createState() {
    return FormPageState();
  }
}

class FormPageState extends State<FormPage> {
  
  Widget build(BuildContext context) {
    Map data = {};
    data = ModalRoute.of(context)!.settings.arguments as Map; 

    String nome = data["nome"];
   final ButtonStyle style =
        TextButton.styleFrom(primary: Theme.of(context).colorScheme.onPrimary);
    return Scaffold(
      appBar: AppBar(
        title: Text("User"),
        leading: Icon(Icons.login),
        actions: <Widget>[
           Padding(
            padding: EdgeInsets.only(right:25),
            child:
              Row(children:[
             TextButton(
                style: style,
                onPressed: () {
                  Navigator.of(context).pushNamed('/register');
                },
              child: const Text('Register'),
              ),
              ])
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
				currentIndex: 0,
        backgroundColor: Color.fromARGB(68, 180, 50, 152),
        items: [
          BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: "Dados",
              backgroundColor: Color.fromARGB(0, 255, 255, 255),
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.shopping_basket),
              backgroundColor: Colors.white.withOpacity(0.1),
              label: "Produtos",
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.home),
              backgroundColor: Colors.white.withOpacity(0.1),
              label: "Home",
          ),
        ],
         onTap: (int index) {
          switch (index) {
            case 0:
            Navigator.of(context).pushNamed('/form');
            break;
            case 1:
              Navigator.of(context).pushNamed('/galery');
            break;
            case 2:
              Navigator.of(context).pushNamed('/home');
            break;
          }
        }
      ),
      body: SizedBox(
        width: double.infinity,
        height: double.infinity,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Text("Bem vindo"),
            /*Container(
              height: 20,
            ),*/
            Text(
               nome,
                style: TextStyle(
                        fontSize: 30,
                        color: Colors.white,
                ),
            ),
            //SizedBox(height: 20),
          ]),
        ),
      ),
    );
  }
}