import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_app/Model/Store.dart';


class MyGalery extends StatefulWidget {
  const MyGalery({Key? key}) : super(key: key);

  @override
  State<MyGalery> createState() => _MyGaleryState();
}
class _MyGaleryState extends State<MyGalery> {
final String texto = Store.login;
bool loading = true;

  int itens = 10;
  
  @override

  void _loadingImageIds(){
    
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
      ),
      body: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
              image: NetworkImage(
                  "https://i0.wp.com/emotioncard.com.br/wp-content/uploads/2017/08/02c1b43868407cd6f7c142885eb95c46-mobile-wallpaper-wallpaper-backgrounds-1.jpg?resize=660%2C1173&ssl=1"),
              fit: BoxFit.cover,
            ),
          ),
        child:
      Column(children:[
            Row(
        children:[
          Padding(
              padding: EdgeInsets.only(left:50,bottom:15),
              child:Column(children:[
                Container(
                width: 130,
                height: 130,
                child: ClipRRect(borderRadius: BorderRadius.circular(20),
                     child: Image.network('https://i.pinimg.com/originals/51/2b/4b/512b4b870390fac58da5206e88d228d6.png'),
              ),),
                
                Text('Itens : ${itens}', style:TextStyle(fontSize: 20)),
                SizedBox(
              height: 50,
              width: 150,
              child:Container(
                padding: EdgeInsets.only(bottom:10),
                child:TextButton(
                  onPressed: () => {
                    if(itens <= 0){
                      showDialog<String>(
                    context: context,
                    builder: (BuildContext context) => AlertDialog(
                      title: const Text('Sem Produtos'),
                      content: const Text('Falta de Produtos'),
                      actions: <Widget>[
                        TextButton(
                          onPressed: () => Navigator.pop(context, 'Cancel'),
                          child: const Text('Cancel'),
                        ),
                        /* TextButton(
                          onPressed: () => Navigator.pop(context, 'OK'),
                          child: const Text('OK'),
                        ), */
                      ],
                    ),
                  ),
                      setState((){
                        itens = 1;
                        itens --;
                      })
                    }
                    else{
                      setState((){

                        itens --;
                      })
                    }
                  },
                  child: const Icon(Icons.remove),
                ),
                ),
              )]),
            ),
          Padding(
              padding: EdgeInsets.only(left:50, bottom:30,top:10),
              child:Column(children:[
                Container(
                width: 130,
                height: 130,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.network(
                    'http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png'),
                ),),
                
                Text('Itens : ${itens}', style:TextStyle(fontSize: 20)),
                SizedBox(
              height: 50,
              width: 150,
              child:Container(
                padding: EdgeInsets.only(bottom:10,top:15),
                child:TextButton(
                  onPressed: () => {
                    if(itens <= 0){
                      showDialog<String>(
                    context: context,
                    builder: (BuildContext context) => AlertDialog(
                      title: const Text('AlertDialog Title'),
                      content: const Text('AlertDialog description'),
                      actions: <Widget>[
                        TextButton(
                          onPressed: () => Navigator.pop(context, 'Cancel'),
                          child: const Text('Cancel'),
                        ),
                        /* TextButton(
                          onPressed: () => Navigator.pop(context, 'OK'),
                          child: const Text('OK'),
                        ), */
                      ],
                    ),
                  ),
                      setState((){
                        itens = 1;
                        itens --;
                      })
                    }
                    else{
                      setState((){

                        itens --;
                      })
                    }
                  },
                  child: const Icon(Icons.remove),
                ),
                ),
              )]),

              ),
          ]
      ),
      Row(
          children:[
            Padding(
              padding: EdgeInsets.only(left:50),
              child:Container(
                width: 130,
                height: 130,
                
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.network(
                    'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png'),
                )

              ),
             ),
             Padding(
                  padding: EdgeInsets.only(left:50),
                  child:Container(
                    width: 130,
                    height: 130,

                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(20),
                      child: Image.network(
                        "https://www.freeiconspng.com/thumbs/shoes-png/green-running-shoes-png-24.png"
                      )

                  ),
                ),
              )
          ]
          )
    ])

    )));
  }
}
