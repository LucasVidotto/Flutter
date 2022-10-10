import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_app/Model/Store.dart';

class Cart extends StatefulWidget {
  const Cart({Key? key}) : super(key: key);

  @override
  State<Cart> createState() => _CartState();
}
class _CartState extends State<Cart> {
final String texto = Store.login;
bool loading = true;

  int itens = 10;
  
  @override

  void _loadingImageIds(){
    
  }
  String _urlImage = Products.url;
  String description = Products.description;
  double price = Products.price;
  @override
  Widget build(BuildContext context) {
    final ButtonStyle style =
        TextButton.styleFrom(primary: Theme.of(context).colorScheme.onPrimary);
    String _buttonText = "Click";
    int intens = 10;
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
          Text(description),
          Container(
                width: 170,
                height: 170,
                child: ClipRRect(borderRadius: BorderRadius.circular(20),
                     child: Image.network(_urlImage),
              ),),
          SizedBox(
            height: 20,
          ),
          Padding(padding: const EdgeInsets.only(left:40.0),child:
          Row(children: [
            Text('Preço : ${price}',
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
          ],),),
          Padding(padding: const EdgeInsets.only(left:40.0),child:
          Row(children: [
            Text('Tamanhos : ', style:TextStyle(color: Colors.black, fontSize: 20)),
            Padding(padding: const EdgeInsets.only(left:20.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                color: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text('39',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{})
              ),),
             Padding(padding: const EdgeInsets.only(left:10.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                color: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text('40',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{})
              ),),
              Padding(padding: const EdgeInsets.only(left:10.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                color: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text('41',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{})
              ),),
              Padding(padding: const EdgeInsets.only(left:10.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                color: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text('42',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{})
              ),),
              Padding(padding: const EdgeInsets.only(left:10.0),child:
              Container(width: 35,height: 35,
                decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(50),
                color: Color.fromARGB(255, 65, 62, 62),
                ),
                child:TextButton(child: Text('43',
                  style:TextStyle(color:Colors.white)),
                  onPressed: ()=>{})
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
                      onPressed: ()=>{})
                  ),))
            ],)
    )));
  }
}
