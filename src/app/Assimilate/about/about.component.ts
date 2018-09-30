import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  enquiryDetail: FormGroup;

  constructor(private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.enquiryDetail = this._formBuilder.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      enqfor: ['', Validators.required],
      msg: ['', Validators.required],
    });
  }

  about = [
    {img: "../../../assets/images/form.jpg", description: " strong focussed team of highly motivated software professionals with unsurpassed technological expertise that is capable of delivering best of breed software technology training booming in IT. As part of society, we are responsible to give something back to society for a good cause. We are enthusiastic group of people willing to help the IT aspirant who wants to enter into IT industry with our experience at affordable price. Our aim to prepare the IT professionals, who are lacking perception or essential skills, vital to excel in the IT field. The training program is designed to make them adept in facing challenges of the IT world. It provides a favorable opportunity to fresh and experience IT graduates to maximize their potential and also assists in launching their careers."},
  ];

  whyus = [
    {description: "Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis.Ut seviverra itae turpis massa sed. Volutpat blandit in dictum non. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Diam maecenas ultricies mi eget mauris pharetra et. Praesent semper feugia nibh sed pulvinar proin. Diam sollicitudin tempor id eu nisl nunc mi. Fames ac turpis egestas maecenas pharetra convallis posuere. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Hendrerit gravida rutrum quisque non tellus orci. Dignissim cras tincidunt lobortis feugiat vivamus. Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisi scelerisque eu ultrices vitae auctor eu. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Risus at ultrices mi tempus imperdiet nulla malesuada."},
  ];

  slides = [
    {name:"Full Name", cname:"Company Name", img: "http://placehold.it/350x150/000000",text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {name:"Full Name", cname:"Company Name", img: "http://placehold.it/350x150/000000",text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {name:"Full Name", cname:"Company Name", img: "http://placehold.it/350x150/000000",text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {name:"Full Name", cname:"Company Name", img: "http://placehold.it/350x150/000000",text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {name:"Full Name", cname:"Company Name", img: "http://placehold.it/350x150/000000",text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {name:"Full Name", cname:"Company Name", img: "http://placehold.it/350x150/000000",text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
  ];
 
  slides1 = [
    {title:"Company Person Name Here [Company Name]", designation:"Company Designation Here", text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {title:"Company Person Name Here [Company Name]", designation:"Company Designation Here", text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {title:"Company Person Name Here [Company Name]", designation:"Company Designation Here", text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {title:"Company Person Name Here [Company Name]", designation:"Company Designation Here", text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
    {title:"Company Person Name Here [Company Name]", designation:"Company Designation Here", text: "Arcu vitae elementum curabitur vitae nunc sed. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl nisiscelerisque eu ultrices vitae auctor eu. Malesuada fames acturpis egestas maecenas pharetra convallis posuere morbi.Risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci. Dignissim tincidunt lobortis feugiat vivamus. Morbi enim nuncfaucibus a pellentesque"},
  ];

    slideConfig1= {
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }; 
        
    slideConfig2= {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }; 

    makecall(){
      console.log("make a call")
    }

    nocall(){
      console.log("no call")
    }
}
