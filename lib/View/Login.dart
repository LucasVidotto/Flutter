import 'package:flutter/material.dart';
import 'package:flutter_app/Model/Store.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  var chave = GlobalKey<FormState>();
  var isLoading = false;
  void _enviar() {
    final valido = chave.currentState!.validate();
    if (!valido) {
      return  ;
    }else{
      if(ControlerTeste.value.text == texto){
        _Salvar();
      }else
        print("error");
    }
    chave.currentState!.save();
  }
  final String texto = Store.login;
  final ControlerTeste = TextEditingController();
  void _Salvar() {
    Navigator.pushReplacementNamed(context, "/form",
        arguments: {"nome": ControlerTeste.value.text});
  }
  bool exibir = false;
  @override
  Widget build(BuildContext context) {
    
    final ButtonStyle style =
        TextButton.styleFrom(primary: Theme.of(context).colorScheme.onPrimary);
    return Scaffold(
      appBar: AppBar(
        title: Text("Login"),
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
      
      //body
      body: Container(
          decoration: BoxDecoration(
            gradient: RadialGradient(
          colors: [Color(0xff000000), Color(0xff085795)],
          center: Alignment.center,
          radius: 0.8,
        )
        
          ),
        child: Padding(
        padding: const EdgeInsets.all(16.0),
        //form
        child: Form(
          key: chave,
          child: Column(
            children: <Widget>[
              Container(
                width:130, height: 130,
                child:Image.network(
                  'https://cdn-icons-png.flaticon.com/512/5087/5087579.png',
                  fit: BoxFit.fill,
                ),
              ),
              //styling
              SizedBox(
                height: MediaQuery.of(context).size.width * 0.01,
              ),
              /* Material(
                elevation: 18,
                shadowColor: Colors.white,
                child: */
                TextFormField(
                  controller: ControlerTeste,
                  decoration: InputDecoration(
                    labelText: 'Email/Login',
                    focusedBorder:OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.black),
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                    border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(
                    10.0,
                  ),
                ),
                icon: new Icon(Icons.email, color:  Color.fromARGB(255, 159, 161, 167)),
                fillColor: Colors.transparent,
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
                    }else if(ControlerTeste.value.text != texto)
                      return 'Email invalid';
                    return null;
                  },
                ),
              /* ), */
              //box styling
              SizedBox(
                height: MediaQuery.of(context).size.width * 0.1,
              ),
              /* Material(
                elevation: 18,
                shadowColor: Colors.white,
                child: */ TextFormField(
                  
                decoration: InputDecoration(
                  labelText: 'Password',
                  focusedBorder:OutlineInputBorder(
                    borderSide: const BorderSide(color: Colors.black),
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(
                      10.0,
                    ),
                  ),
                  icon: new Icon(Icons.lock, color: Color.fromARGB(255, 159, 161, 167)),
                  fillColor: Colors.transparent,
                  filled: true,
                  suffixIcon: GestureDetector(
                   child: Icon(exibir == false ? Icons.visibility_off: Icons.visibility , color: Color.fromARGB(255, 159, 161, 167)),
                   onTap: () => {
                    setState((){
                      exibir = !exibir;
                    })
                   },
                  )
                ),
                keyboardType: TextInputType.emailAddress,
                onFieldSubmitted: (value) {},
                obscureText: exibir == false ? true : false, 
                validator: (value) {
                  if (value!.isEmpty|| value.length < 6 ||
                        !RegExp(r"^[a-zA-Z0-9]+[0-9]")
                            .hasMatch(value) ) {
                    return 'Enter a valid password!';
                  }
                  return null;
                },
              ),
              //text input 
             /*  ), */
              SizedBox(
                height: MediaQuery.of(context).size.width * 0.1,
              ),
              Container(width: 160,height: 50, 
              
              decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: Colors.transparent,
              
              /* gradient: LinearGradient(
                colors: [Color.fromARGB(137, 60, 52, 180),Color.fromARGB(171, 247, 247, 247)],
                begin: FractionalOffset.centerLeft,
                end: FractionalOffset.centerRight,
              ), */
              ),
              child:
              TextButton(
                style: TextButton.styleFrom(
                  side: BorderSide(width: 1.0, color:Colors.white),
                  primary: Colors.white,
                  shadowColor: Color.fromARGB(255, 255, 255, 255),
                  elevation: 20,
                   shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20.0),
                  ), 
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
              /* Container(
                width:250,
                height:70,
                child:
                Stack(
                children: [
                  Positioned(                   
                    child: Text("Register Now"),
                    left: 140,
                    top: 40,
                  ),
                       
                ],
              ),
              ) */
            ],
          ),
        ),
      ),
        ),
    );
  }
}