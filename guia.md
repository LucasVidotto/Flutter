class HomePage extends StatefulWidget {
  @override
  State<HomePage> createState() {
    return HomePageState();
  }
}

class HomePageState extends State<HomePage> {
  int counter = 0;
  void _incrementCounter() {}
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
          onPressed: _incrementCounter,
          tooltip: 'Increment',
    ));
  }
}