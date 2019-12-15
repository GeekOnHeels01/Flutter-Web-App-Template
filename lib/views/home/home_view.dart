import 'package:flutter/material.dart';
import 'package:the_basics/widgets/call_to_action/call_to_action.dart';
import 'package:the_basics/widgets/centered_view/centered_view.dart';
import 'package:the_basics/widgets/contain_details/contain_details.dart';
import 'package:the_basics/widgets/navigation_bar/navigation_bar.dart';

class HomeView extends StatelessWidget {
  const HomeView({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: CenteredView(
        child: Column(
          children: <Widget>[
            NavigationBar(),
            Expanded(
              child: Row(
                children: <Widget>[
                  ContainDetails(),
                  Expanded(
                    child: Center(
                      child: CallToAction('A simple button'),
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
