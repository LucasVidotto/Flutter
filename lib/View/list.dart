import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_app/Model/Store.dart';


class List extends StatefulWidget {
  const List({Key? key}) : super(key: key);

  @override
  State<List> createState() => _ListState();
}
class _ListState extends State<List> {
final String texto = Store.login;
bool loading = true;

  int itens = 10;
  
  @override


  String codigo = 'not';
  void _Enviar() {
    Navigator.pushReplacementNamed(context, "/info",
        arguments: {"nome": codigo});
  }
  @override
  Widget build(BuildContext context) {
    final ButtonStyle style =
        TextButton.styleFrom(primary: Theme.of(context).colorScheme.onPrimary);
    String _buttonText = "Click";
    int intens = 10;
    return(Scaffold(
      appBar: AppBar(
        title: Text("List"),
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
      bottomNavigationBar:Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [Color.fromARGB(255, 117, 115, 115), Color.fromARGB(255, 63, 62, 61)],
          begin: Alignment.topLeft,
          end: Alignment.topRight,
          stops: [0.0, 0.8],
          tileMode: TileMode.clamp,
        ),
      ),
      child: BottomNavigationBar(
				currentIndex: 0,
        backgroundColor:Colors.transparent,
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
            Navigator.pushReplacementNamed(context, "/form",
              arguments: {"nome": texto});
            break;
            case 1:
            Navigator.of(context).pushNamed('/galery');
            break;
            case 2:
            Navigator.of(context).pushNamed('/home');
            break;
          }
        }
      ),),
      body:Container(
          decoration: BoxDecoration(
            gradient: RadialGradient(
          colors: [Color.fromARGB(255, 252, 249, 249), Color.fromARGB(255, 202, 199, 199)],
          center: Alignment.bottomLeft,
          radius: 0.8,
        )
        
          ),
        child:
      ListView(children:[
            Row(
        children:[
          Padding(
              padding: EdgeInsets.only(left:35, bottom:30,top:10),
              child:Container(width:135,height:161, 
              decoration:BoxDecoration(color: Colors.black.withOpacity(0.3),
              border: Border.all(color: Colors.black.withOpacity(0.3)),
              borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              child: 
              Column(children:[
                 Text('NIKE SPORT', style: TextStyle(color: Colors.black)),
                Container(
                width: 100,
                height: 100,
                child: RotationTransition(
                turns:  AlwaysStoppedAnimation(20 / 360),child: ClipRRect(borderRadius: BorderRadius.circular(20),
                     child: Image.network('https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png'),
              ),),),

               Container(width: 100,height: 40, 
                    decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color:Colors.black
                    ),
                    child:TextButton(
                    onPressed: () => {
                      setState(() {
                        codigo = 'nike';
                      }),
                      _Enviar()
                    },
                    style: TextButton.styleFrom(
                      primary: Colors.white,
                      shadowColor: Color.fromARGB(255, 255, 255, 255),
                      elevation: 5,
                      /* shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ), */
                    ),
                    child: Row(children: [
                      const Icon(Icons.info, size: 15.0,),
                      Padding(padding: EdgeInsets.only(left: 4), child:
                      Text('More Info', style: TextStyle(fontSize: 13,)),)
                    ]),
                    ),
                )]),
              )
            ),
          Padding(
              padding: EdgeInsets.only(left:40, bottom:30,top:10),
              child:
              Container(width:135,height:161, 
              decoration:BoxDecoration(color: Colors.black.withOpacity(0.3),
              border: Border.all(color: Colors.black.withOpacity(0.3)),
              borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              child:
              Column(children:[
                Text('W3 SPORT', style: TextStyle(color: Colors.black)),
                Container(
                width: 100,
                height: 100,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.network(
                    'http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png'),
                ),),

               Container(width: 100,height: 40, 
                    decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color:Colors.black
                    ),
                    child:TextButton(
                    onPressed: () => {},
                    style: TextButton.styleFrom(
                      primary: Colors.white,
                      shadowColor: Color.fromARGB(255, 255, 255, 255),
                      elevation: 5,
                      /* shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ), */
                    ),
                    child: Row(children: [
                      const Icon(Icons.info, size: 13.0,),
                      Text('More Info', style: TextStyle(fontSize: 13),)
                    ]),
                    ),
                )]),

              ),
          )]
      ),
      Row( //Kit Dois
          children:[
            Padding(
              padding: EdgeInsets.only(left:35, bottom:30,top:10),
              child:
              Container(width:135,height:161, 
              decoration:BoxDecoration(color: Colors.black.withOpacity(0.3),
              border: Border.all(color: Colors.black.withOpacity(0.3)),
              borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              child:
              Column(children:[
                Text('Shoes ???', style: TextStyle(color: Colors.black)),
                Container(
                width: 100,
                height: 100,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.network(
                    'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png'),
                ),),
               Container(width: 100,height: 40, 
                    decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color:Colors.black
                    ),
                    child:TextButton(
                    onPressed: () => {},
                    style: TextButton.styleFrom(
                      primary: Colors.white,
                      shadowColor: Color.fromARGB(255, 255, 255, 255),
                      elevation: 5,
                      /* shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ), */
                    ),
                    child: Row(children: [
                      const Icon(Icons.info, size: 13.0,),
                      Text('More Info', style: TextStyle(fontSize: 13),)
                    ]),
                    ),
                )]),
                )
              ),
            Padding(
              padding: EdgeInsets.only(left:40, bottom:30,top:10),
              child:
              Container(width:135,height:161, 
              decoration:BoxDecoration(color: Colors.black.withOpacity(0.3),
              border: Border.all(color: Colors.black.withOpacity(0.3)),
              borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              child:
              Column(children:[
                 Text('MIZUNO', style: TextStyle(color: Colors.black)),
                Container(
                width: 100,
                height: 100,
                child: RotationTransition(
                turns:  AlwaysStoppedAnimation(-20 / 360),child:ClipRRect(
                      borderRadius: BorderRadius.circular(20),
                      child: Image.network(
                        "https://freepngdownload.com/image/thumb/running-shoes-png-free-download-42.png"
                      )
                  ),),),

               Container(width: 100,height: 40, 
                    decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color:Colors.black
                    ),
                    child:TextButton(
                    onPressed: () => {
                      setState(() {
                        codigo = 'mizuno';
                      }),
                      _Enviar()
                    },
                    style: TextButton.styleFrom(
                      primary: Colors.white,
                      shadowColor: Color.fromARGB(255, 255, 255, 255),
                      elevation: 5,
                      /* shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ), */
                    ),
                    child: Row(children: [
                      const Icon(Icons.info, size: 13.0,),
                      Text('More Info', style: TextStyle(fontSize: 13),)
                    ]),
                    ),
                )]),
              ),
          )]
          ),
      Row( // Kit Três
          children:[
            Padding(
              padding: EdgeInsets.only(left:35, bottom:30,top:10),
              child:
              Container(width:135,height:161, 
              decoration:BoxDecoration(color: Colors.black.withOpacity(0.3),
              border: Border.all(color: Colors.black.withOpacity(0.3)),
              borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              child:
              Column(children:[
                Text('NIKE RUN', style: TextStyle(color: Colors.black)),
                Container(
                width: 100,
                height: 100,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.network(
                    'https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Transparent.png'),
                ),),
               Container(width: 100,height: 40, 
                    decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color:Colors.black
                    ),
                    child:TextButton(
                    onPressed: () => {},
                    style: TextButton.styleFrom(
                      primary: Colors.white,
                      shadowColor: Color.fromARGB(255, 255, 255, 255),
                      elevation: 5,
                      /* shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ), */
                    ),
                    child: Row(children: [
                      const Icon(Icons.info, size: 13.0,),
                      Text('More Info', style: TextStyle(fontSize: 13),)
                    ]),
                    ),
                )]),
                )
              ),
            Padding(
              padding: EdgeInsets.only(left:40, bottom:30,top:10),
              child:
              Container(width:135,height:161, 
              decoration:BoxDecoration(color: Colors.black.withOpacity(0.3),
              border: Border.all(color: Colors.black.withOpacity(0.3)),
              borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              child:
              Column(children:[
                 Text('ADIDAS SPEED', style: TextStyle(color: Colors.black)),
                Container(
                width: 100,
                height: 100,
                child: ClipRRect(
                      borderRadius: BorderRadius.circular(20),
                      child: Image.network(
                        "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png"
                      )
                  ),),

               Container(width: 100,height: 40, 
                    decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color:Colors.black
                    ),
                    child:TextButton(
                    onPressed: () => {
                      Navigator.pushNamed(context, '/info')
                    },
                    style: TextButton.styleFrom(
                      primary: Colors.white,
                      shadowColor: Color.fromARGB(255, 255, 255, 255),
                      elevation: 5,
                      /* shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30.0),
                      ), */
                    ),
                    child: Row(children: [
                      const Icon(Icons.info, size: 13.0,),
                      Text('More Info', style: TextStyle(fontSize: 13),)
                    ]),
                    ),
                )]),
              ),
          )]
          )
    ])

    )));
  }
}
