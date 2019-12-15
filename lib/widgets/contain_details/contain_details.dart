import 'package:flutter/material.dart';

class ContainDetails extends StatelessWidget {
  const ContainDetails({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 600,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            'A TEMPLATE WEB APP.\nTHE BASICS',
            style: TextStyle(fontWeight: FontWeight.w800, height: 0.9, fontSize: 80),
          ),
          SizedBox(
            height: 30,
          ),
          Text(
              'This is a template, a skeleton of a web app.',
              style: TextStyle(
                fontSize: 21,
                height: 1.7,
              ))
        ],
      ),
    );
  }
}
