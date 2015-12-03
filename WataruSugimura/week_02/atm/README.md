#Title: ATM App

###Type:
- Lab

###Summary
- This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
- You'll be selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

###Objectives:
- DOM selection, appending, removal, updating

###Specification:

* Keep track of the checking and savings balances somewhere//取引のサマリーを記録する。	
* Add functionality so that a user can deposit money into one of the bank accounts.二つの口座に入金できる機能。画面に表示する。
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Add functionality so that a user can withdraw money from one of the bank accounts.引き出す機能。画面に反映させる。
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Make sure the balance in an account can't go negative. If a user tries to　バランスがマイナスにならないように。
withdraw more money than exists in the account, ignore the transaction.
* When the balance of the bank account is $0 the background of that bank account　バランスが０になると背景をグレイから赤に変更させる。
should be red. It should be gray when there is money in the account.
* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
//一つの口座に十分なお金がなければ、足りない分を他の口座から下ろせる。
If the withdrawal amount is more than the combined account balance, ignore it.
両方の口座を足しても足りなければ、取引中止！
* Make sure there is overdraft protection going both ways.
* Are there ways to refactor your code to make it DRYer?
