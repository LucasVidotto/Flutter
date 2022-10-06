import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      bottomNavigationBar: BottomNavigationBar(
				currentIndex: 0,
        items: [
          BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: "Meus Dados"
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.shopping_basket),
              label: "Produtos",
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: "Home"
          ),
        ],
         onTap: (int index) {
          switch (index) {
            case 0:
            Navigator.of(context).pushNamed('/home');
            break;
            case 1:
            Navigator.of(context).pushNamed('/');
            break;
            case 2:
            Navigator.of(context).pushNamed('/register');
            break;
          }
        }
      ),
    );
  }
}

