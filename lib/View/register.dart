import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/cupertino.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({Key? key}) : super(key: key);

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  var chave = GlobalKey<FormState>();
  var isLoading = false;
  
  void _enviar() {
    final valido = chave.currentState!.validate();
    if (!valido) {
      return;
    }
    chave.currentState!.save();
  }
  
   
  @override
  Widget build(BuildContext context) {
    final ButtonStyle style =
        TextButton.styleFrom(primary: Theme.of(context).colorScheme.onPrimary);
    return Scaffold(
      appBar: AppBar(
        title: Text("Register"),
        leading: Icon(Icons.route),
        actions: <Widget>[
           Padding(
            padding: EdgeInsets.only(right:25),
            child:
              Row(children:[
                TextButton(
                style: style,
                onPressed: () {
                  Navigator.of(context).pushNamed('/');
                },
              child: const Text('Login'),
              ),
              
              ])
          ),
        ],
      ),
      
      body: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
              image: NetworkImage(
                  "https://images4.alphacoders.com/936/936378.jpg"),
              fit: BoxFit.cover,
            ),
          ),
        child: Padding(
        padding: const EdgeInsets.all(16.0),
        //form
        child: Form(
          key: chave,
          child: Column(
            children: <Widget>[
              Text(
                "RegisterPage ",
                style: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold),
              ),
              //styling
              SizedBox(
                height: MediaQuery.of(context).size.width * 0.06,
              ),
              Material(
                elevation: 18,
                shadowColor: Colors.white,
                child:
                TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Email/Login',
                    border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(
                    10.0,
                  ),
                ),
                icon: new Icon(Icons.login, color: Color(0xff224597)),
                fillColor: Colors.black,
                filled: true,
                  ),
                  keyboardType: TextInputType.emailAddress,
                  onFieldSubmitted: (value) {
                    //Validator
                  },
                  validator: (value) {
                    if (value!.isEmpty ||
                        !RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                            .hasMatch(value)) {
                      return 'Enter a valid email!';
                    }
                    return null;
                  },
                ),
              ),
              //box styling
              SizedBox(
                height: MediaQuery.of(context).size.width * 0.06,
              ),
              Material(
                elevation: 18,
                shadowColor: Colors.white,
                child:
                TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Name',
                    border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(
                    10.0,
                  ),
                ),
                icon: new Icon(Icons.login, color: Color(0xff224597)),
                fillColor: Colors.black,
                filled: true,
                  ),
                  keyboardType: TextInputType.name,
                  onFieldSubmitted: (value) {
                    //Validator
                  },
                  validator: (value) {
                    if (value!.isEmpty ||
                        !RegExp(r"^[a-zA-Z]")
                            .hasMatch(value)) {
                      return 'Enter your name';
                    }
                    return null;
                  },
                ),
              ),
               SizedBox(
                height: MediaQuery.of(context).size.width * 0.06,
              ),
              Material(
                elevation: 18,
                shadowColor: Colors.white,
                child: TextFormField(
                decoration: InputDecoration(
                  labelText: 'Password',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(
                      10.0,
                    ),
                  ),
                  icon: new Icon(Icons.lock, color: Color(0xff224597)),
                  fillColor: Colors.black,
                  filled: true,
                ),
                keyboardType: TextInputType.emailAddress,
                onFieldSubmitted: (value) {},
                obscureText: true, 
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Enter a valid password!';
                  }
                  return null;
                },
              ),
              //text input 
              ),
              SizedBox(
                height: MediaQuery.of(context).size.width * 0.06,
              ),
              Container(width: 140,height: 50, 
              decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [Color.fromARGB(140, 59, 51, 180),Color.fromARGB(139, 228, 81, 208), Color.fromARGB(140, 87, 28, 99)],
                begin: FractionalOffset.centerLeft,
                end: FractionalOffset.centerRight,
              ),
              ),
              child:
              TextButton(
                style: TextButton.styleFrom(
                  primary: Colors.white,
                  shadowColor: Color.fromARGB(255, 255, 255, 255),
                  elevation: 5,
                ),
                child: Text(
                  "Enter",
                  style: TextStyle(
                    fontSize: 24.0,
                  ),
                ),
                onPressed: () => _enviar() 
              ),
              ),
            ],
          ),
        ),
      ),
        ),
    );
  }
}