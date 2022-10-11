import 'package:flutter/material.dart';

class Feed extends StatefulWidget {
  const Feed({Key? key}) : super(key: key);

  @override
  State<Feed> createState() => _FeedState();
}
class _FeedState extends State<Feed> {
  final titleController = TextEditingController();
  String text = '';
  List<String> cardValues = [];
  void _setText() {
    setState(() {
      text = titleController.text;
    });
    increment();
    print('olá');
  }
  void increment() => setState(() => cardValues.add(text));
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Feed'),
      ),
      body: CustomScrollView(
        slivers: [
          SliverList(
            delegate: SliverChildListDelegate(
              cardValues.map((e) => Text('${e}')).toList(),
            ),
          ),
          SliverFillRemaining(
            hasScrollBody: false,
            fillOverscroll: true,
            child: Align(
              alignment: Alignment.bottomCenter,
              child: Container(
            margin: EdgeInsets.all(10),
            constraints: BoxConstraints.expand(height: 160, width: 160),
            child: Column(children: [
              TextField(
                  decoration: InputDecoration(labelText: 'Comment'),
                  controller: titleController,
                ),
              ElevatedButton(
              onPressed:() => _setText(),
              child: Text('Add'),
            )])
            ),),
          ),
          ],
        ),
      );
  }
}
      