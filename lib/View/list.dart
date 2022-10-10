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

  void _loadingImageIds(){
    
  }
  void _Salvar() {
    Navigator.pushReplacementNamed(context, "/form",
        arguments: {"nome": 01});
  }
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
      bottomNavigationBar:Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [Color.fromARGB(255, 230, 21, 14), Color.fromARGB(255, 231, 143, 12)],
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
      body: Container(
          decoration: BoxDecoration(
            gradient: RadialGradient(
          colors: [Color(0xffffffff), Color(0xff8b8b8b)],
          center: Alignment.bottomLeft,
          radius: 0.8,
        )
        
          ),
        child:
      Column(children:[
            Row(
        children:[
          Padding(
              padding: EdgeInsets.only(left:50, bottom:30,top:10),
              child:Column(children:[
                 Text('Shoes Nike', style: TextStyle(color: Colors.black)),
                Container(
                width: 100,
                height: 100,
                child: ClipRRect(borderRadius: BorderRadius.circular(20),
                     child: Image.network('https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png'),
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
          Padding(
              padding: EdgeInsets.only(left:60, bottom:30,top:10),
              child:Column(children:[
                Text('Shoes ???', style: TextStyle(color: Colors.black)),
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
          ]
      ),
      Row(
          children:[
            Padding(
              padding: EdgeInsets.only(left:50, bottom:30,top:10),
              child:Column(children:[
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

              ),
            Padding(
              padding: EdgeInsets.only(left:60, bottom:30,top:10),
              child:Column(children:[
                 Text('Shoes Nike', style: TextStyle(color: Colors.black)),
                Container(
                width: 100,
                height: 100,
                child: ClipRRect(
                      borderRadius: BorderRadius.circular(20),
                      child: Image.network(
                        "https://www.freeiconspng.com/thumbs/shoes-png/green-running-shoes-png-24.png"
                      )
                  ),),

               Container(width: 100,height: 40, 
                    decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color:Colors.black
                    ),
                    child:TextButton(
                    onPressed: () => {
                      Navigator.pushNamed(context, '/cart')
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
          ]
          )
    ])

    )));
  }
}
