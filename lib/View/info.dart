import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_app/Model/Store.dart';
import 'package:flutter_app/View/feed.dart';

class Info extends StatefulWidget {
  const Info({Key? key}) : super(key: key);

  @override
  State<Info> createState() => _InfoState();
}
class _InfoState extends State<Info> {
final String texto = Store.login;
final List<String> nike = Products.nike;
final List<String> mizu = Products.mizuno;
bool medidas = false;
bool status = false;
List<String> teste = [];
bool loading = true;
int itens = 10;
  @override
  Widget build(BuildContext context) {
    Map data = {};
    data = ModalRoute.of(context)!.settings.arguments as Map; 
    String nome = data["nome"];
    if(nome == 'nike')
      teste = nike;
    else if(nome == 'mizuno')
      teste = mizu;
    final ButtonStyle style =
        TextButton.styleFrom(primary: Theme.of(context).colorScheme.onPrimary);
/*     String _buttonText = "Click";
    int intens = 10; */
    
    return(Scaffold(
      appBar: AppBar(
        title: Text("Galeri"),
        leading: Icon(Icons.image),
        actions: <Widget>[
           Padding(
            padding: EdgeInsets.only(right:25),
            child:
              Row(children:[
                TextButton(
                style: style,
                onPressed: () {
                  Navigator.of(context).pushNamed('/home');
                },
              child: const Text('Home'),
              ),
             TextButton(
                style: style,
                onPressed: () {
                  Navigator.of(context).pushNamed('/register');
                },
              child: const Text('Register'),
              ),
             TextButton(
                style: style,
                onPressed: () {
                  Navigator.of(context).pushNamed('/login');
                },
              child: const Text('Login'),
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
      ),
      body: Container(
        width: MediaQuery.of(context).size.width ,
        height: MediaQuery.of(context).size.height,
          decoration: BoxDecoration(
            gradient: RadialGradient(
          colors: [Color(0xff2e2e2e),Color.fromARGB(255, 122, 117, 117), Color(0xffffffff)],
          center: Alignment.topRight,
          radius: 0.8,
        )
          ),
        child:
        Column(children: [
          Text(teste[1]),
          Container(
                width: 170,
                height: 170,
                child: ClipRRect(borderRadius: BorderRadius.circular(20),
                     child: Image.network(teste[3]),
              ),),
          SizedBox(
            height: 20,
          ),
          Padding(padding: const EdgeInsets.only(left:40.0),child:
          Row(children: [
            Text('Preço : ${teste[2]}',
            style:TextStyle(color: Colors.black, fontSize: 20,
            shadows: [
            Shadow(
                blurRadius: 10.0,
                color: Colors.black,
                offset: Offset(5.0, 5.0),
                ),
            ],
            ),
            ),
            Padding(padding: const EdgeInsets.only(left:70.0),child:
            Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                 color: Color.fromARGB(255, 65, 62, 62),
                ),
                child:
                
                TextButton(child: Text(medidas == false? 'US' : 'BR'
                ,style: TextStyle(fontSize: 10, color: Colors.white),), onPressed: ()=>{
              setState((){
                medidas = !medidas;
              })
            })),)
          ],),),
          Padding(padding: const EdgeInsets.only(left:40.0),child:
          Row(children: [
            Text('Tamanhos : ', style:TextStyle(color: Colors.black, fontSize: 20)),
            Padding(padding: const EdgeInsets.only(left:20.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                 color: status == true ? Colors.green: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text(medidas == false ? '39' : '7.5',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{
                    setState((){
                      status = !status;
                    })
                  })
              ),),
             Padding(padding: const EdgeInsets.only(left:10.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                 color: status == true ? Colors.green: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text(medidas == false ? '40' : '8.5',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{
                    setState((){
                      status = !status;
                    })
                  })
              ),),
              Padding(padding: const EdgeInsets.only(left:10.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                 color: status == true ? Colors.green: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text(medidas == false ? '41' : '9.5',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{
                    setState((){
                      status = !status;
                    })
                  })
              ),),
              Padding(padding: const EdgeInsets.only(left:10.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                color: status == true ? Colors.green: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text(medidas == false ? '42' : '10',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{
                    setState((){
                      status = !status;
                    })
                  })
              ),),
              Padding(padding: const EdgeInsets.only(left:10.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                 color: status == true ? Colors.green: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text(medidas == false ? '43' : '11',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{
                    setState((){
                      status = !status;
                    })
                  })
              ),),
          ],)),
          Padding(padding: const EdgeInsets.only(top:80),child: 
              Align(
                alignment: AlignmentDirectional.center,
                child:
              Container(width: 100,height: 50,
                    alignment: AlignmentDirectional.center,
                    decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(30),
                    color: Color.fromARGB(255, 56, 54, 54),
                    ),
                    child:TextButton(child: Text('Add cart',
                      style:TextStyle(color:Colors.white)),
                      onPressed: ()=>{
                        Navigator.restorablePushNamed(context, '/cart' )
                      })
                  ),)),
            ],)
    )));
  }
}
