#include <iostream>

using namespace std;
// Ganti nama functionnya sama nama variabelnya
// nilai1 sama nilai2 itu variabel
// double itu tipe data functionnye
double function1(long double nilai1, long double nilai2){
	return nilai1*nilai2;
}
// Ganti nama functionnya sama nama variabelnya
// nilai1 sama nilai2 itu variabel
// double itu tipe data functionnye
double function2(long double nilai1, long double nilai2){
	return nilai1/nilai2;
}
// Ganti nama functionnya sama nama variabelnya
// nilai1 sama nilai2 itu variabel
// double itu tipe data functionnye
int function3(int nilai1, int nilai2){
	return nilai1%nilai2;
}

int main(){
	// bebas dah lu ganti apaan
	char menu;
	// ini juga bebas dah
	cout << "a. Perkalian" << endl;
	cout << "b. Div / Pembagian" << endl;
	cout << "c. Mod / Sisa hasil bagi" << endl;

	cout << "Pilihan : "; cin >> menu;
	// gue pake switch
	// serah lu pake apaan
	switch(menu){
		case 'a':{
			long double a, b, c;
			cout << "Masukkan Nilai 1 :";
			cin >> a;
			cout << "Masukkan Nilai 2 :";
			cin >> b;
			// Cara manggil functionnya neh
			// pake nama functionnye
			c = function1(a, b);
			// keluarin di variabelnye
			cout << c;
		};break;
		case 'b':{
			long double a, b, c;
			cout << "Masukkan Nilai 1 :";
			cin >> a;
			cout << "Masukkan Nilai 2 :";
			cin >> b;
			// Cara manggil functionnya neh
			// pake nama functionnye
			c = function2(a, b);
			// keluarin di variabelnye
			cout << c;
		};break;
		case 'c':{
			long double a, b, c;
			cout << "Masukkan Nilai 1 :";
			cin >> a;
			cout << "Masukkan Nilai 2 :";
			cin >> b;
			// Cara manggil functionnya neh
			// pake nama functionnye
			c = function3(a, b);
			// keluarin di variabelnye
			cout << c;
		};break;
		default:return 0;
	}
	return main();
}
