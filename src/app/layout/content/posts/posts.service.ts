import { Injectable } from '@angular/core';
import { Posts } from './posts';
import { CommentsService } from '../comments/comments.service';
import { Comments } from '../comments/comments';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Posts[] = [
    {
      post_id: 1,
      user_id: 4,
      category_id: 5,
      title: "emulation",
      content: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      view_count: 485,
      creation_date: "2023-04-26",
      is_published: false
    },
    {
      post_id: 2,
      user_id: 4,
      category_id: 4,
      title: "radical",
      content: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      view_count: 7,
      creation_date: "2022-10-29",
      is_published: true
    },
    {
      post_id: 3,
      user_id: 1,
      category_id: 2,
      title: "encompassing",
      content: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      view_count: 406,
      creation_date: "2023-06-04",
      is_published: false
    },
    {
      post_id: 4,
      user_id: 5,
      category_id: 1,
      title: "multimedia",
      content: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      view_count: 387,
      creation_date: "2023-05-18",
      is_published: true
    },
    {
      post_id: 5,
      user_id: 2,
      category_id: 4,
      title: "Monitored",
      content: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      view_count: 196,
      creation_date: "2022-10-17",
      is_published: true
    },
    {
      post_id: 6,
      user_id: 3,
      category_id: 1,
      title: "Proactive",
      content: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      view_count: 105,
      creation_date: "2023-02-05",
      is_published: true
    },
    {
      post_id: 7,
      user_id: 1,
      category_id: 4,
      title: "Polarised",
      content: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      view_count: 366,
      creation_date: "2023-04-21",
      is_published: true
    },
    {
      post_id: 8,
      user_id: 1,
      category_id: 1,
      title: "circuit",
      content: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      view_count: 272,
      creation_date: "2023-01-20",
      is_published: true
    },
    {
      post_id: 9,
      user_id: 5,
      category_id: 3,
      title: "local area network",
      content: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      view_count: 469,
      creation_date: "2023-01-24",
      is_published: false
    },
    {
      post_id: 10,
      user_id: 1,
      category_id: 4,
      title: "database",
      content: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      view_count: 314,
      creation_date: "2023-02-26",
      is_published: false
    },
    {
      post_id: 11,
      user_id: 2,
      category_id: 5,
      title: "Synergistic",
      content: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      view_count: 398,
      creation_date: "2022-12-25",
      is_published: false
    },
    {
      post_id: 12,
      user_id: 4,
      category_id: 1,
      title: "software",
      content: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      view_count: 339,
      creation_date: "2022-10-16",
      is_published: true
    },
    {
      post_id: 13,
      user_id: 1,
      category_id: 5,
      title: "Phased",
      content: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      view_count: 268,
      creation_date: "2023-01-14",
      is_published: false
    },
    {
      post_id: 14,
      user_id: 3,
      category_id: 1,
      title: "access",
      content: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      view_count: 45,
      creation_date: "2022-09-28",
      is_published: true
    },
    {
      post_id: 15,
      user_id: 2,
      category_id: 3,
      title: "leverage",
      content: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      view_count: 102,
      creation_date: "2022-10-16",
      is_published: true
    },
    {
      post_id: 16,
      user_id: 3,
      category_id: 5,
      title: "groupware",
      content: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      view_count: 140,
      creation_date: "2023-03-09",
      is_published: false
    },
    {
      post_id: 17,
      user_id: 5,
      category_id: 4,
      title: "national",
      content: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      view_count: 269,
      creation_date: "2023-03-11",
      is_published: true
    },
    {
      post_id: 18,
      user_id: 3,
      category_id: 5,
      title: "alliance",
      content: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      view_count: 341,
      creation_date: "2023-05-19",
      is_published: true
    },
    {
      post_id: 19,
      user_id: 4,
      category_id: 2,
      title: "firmware",
      content: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      view_count: 6,
      creation_date: "2023-03-19",
      is_published: false
    },
    {
      post_id: 20,
      user_id: 5,
      category_id: 4,
      title: "knowledge user",
      content: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      view_count: 299,
      creation_date: "2022-12-13",
      is_published: false
    },
    {
      post_id: 21,
      user_id: 1,
      category_id: 4,
      title: "Reactive",
      content: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      view_count: 270,
      creation_date: "2023-04-26",
      is_published: true
    },
    {
      post_id: 22,
      user_id: 5,
      category_id: 2,
      title: "incremental",
      content: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      view_count: 369,
      creation_date: "2023-03-02",
      is_published: true
    },
    {
      post_id: 23,
      user_id: 2,
      category_id: 3,
      title: "Total",
      content: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      view_count: 21,
      creation_date: "2023-04-21",
      is_published: true
    },
    {
      post_id: 24,
      user_id: 5,
      category_id: 1,
      title: "Vision-oriented",
      content: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      view_count: 326,
      creation_date: "2023-04-25",
      is_published: true
    },
    {
      post_id: 25,
      user_id: 5,
      category_id: 4,
      title: "Graphical User Interface",
      content: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      view_count: 132,
      creation_date: "2023-02-25",
      is_published: false
    },
    {
      post_id: 26,
      user_id: 5,
      category_id: 5,
      title: "maximized",
      content: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      view_count: 473,
      creation_date: "2022-10-14",
      is_published: true
    },
    {
      post_id: 27,
      user_id: 3,
      category_id: 5,
      title: "extranet",
      content: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      view_count: 463,
      creation_date: "2023-04-21",
      is_published: false
    },
    {
      post_id: 28,
      user_id: 3,
      category_id: 1,
      title: "software",
      content: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      view_count: 87,
      creation_date: "2023-02-13",
      is_published: false
    },
    {
      post_id: 29,
      user_id: 1,
      category_id: 5,
      title: "maximized",
      content: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      view_count: 225,
      creation_date: "2023-04-15",
      is_published: true
    },
    {
      post_id: 30,
      user_id: 1,
      category_id: 4,
      title: "Graphic Interface",
      content: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      view_count: 216,
      creation_date: "2023-04-27",
      is_published: false
    },
    {
      post_id: 31,
      user_id: 4,
      category_id: 2,
      title: "Graphical User Interface",
      content: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      view_count: 26,
      creation_date: "2022-10-15",
      is_published: true
    },
    {
      post_id: 32,
      user_id: 2,
      category_id: 4,
      title: "Object-based",
      content: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      view_count: 455,
      creation_date: "2023-01-28",
      is_published: true
    },
    {
      post_id: 33,
      user_id: 4,
      category_id: 3,
      title: "Mandatory",
      content: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      view_count: 303,
      creation_date: "2023-05-18",
      is_published: false
    },
    {
      post_id: 34,
      user_id: 1,
      category_id: 3,
      title: "success",
      content: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      view_count: 331,
      creation_date: "2023-01-13",
      is_published: false
    },
    {
      post_id: 35,
      user_id: 4,
      category_id: 3,
      title: "tangible",
      content: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      view_count: 308,
      creation_date: "2023-01-21",
      is_published: true
    },
    {
      post_id: 36,
      user_id: 5,
      category_id: 4,
      title: "flexibility",
      content: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      view_count: 206,
      creation_date: "2023-04-03",
      is_published: true
    },
    {
      post_id: 37,
      user_id: 2,
      category_id: 5,
      title: "algorithm",
      content: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      view_count: 29,
      creation_date: "2022-12-19",
      is_published: false
    },
    {
      post_id: 38,
      user_id: 1,
      category_id: 1,
      title: "Polarised",
      content: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      view_count: 440,
      creation_date: "2023-02-04",
      is_published: true
    },
    {
      post_id: 39,
      user_id: 4,
      category_id: 4,
      title: "coherent",
      content: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      view_count: 475,
      creation_date: "2023-01-31",
      is_published: true
    },
    {
      post_id: 40,
      user_id: 2,
      category_id: 3,
      title: "Robust",
      content: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      view_count: 332,
      creation_date: "2023-02-01",
      is_published: true
    },
    {
      post_id: 41,
      user_id: 5,
      category_id: 5,
      title: "Organized",
      content: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      view_count: 116,
      creation_date: "2023-05-15",
      is_published: false
    },
    {
      post_id: 42,
      user_id: 4,
      category_id: 1,
      title: "Fully-configurable",
      content: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      view_count: 261,
      creation_date: "2023-05-04",
      is_published: false
    },
    {
      post_id: 43,
      user_id: 4,
      category_id: 3,
      title: "user-facing",
      content: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      view_count: 294,
      creation_date: "2022-10-20",
      is_published: false
    },
    {
      post_id: 44,
      user_id: 2,
      category_id: 5,
      title: "projection",
      content: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      view_count: 312,
      creation_date: "2023-06-08",
      is_published: false
    },
    {
      post_id: 45,
      user_id: 1,
      category_id: 5,
      title: "Multi-layered",
      content: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      view_count: 224,
      creation_date: "2023-01-14",
      is_published: true
    },
    {
      post_id: 46,
      user_id: 4,
      category_id: 1,
      title: "multi-tasking",
      content: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      view_count: 188,
      creation_date: "2022-10-19",
      is_published: false
    },
    {
      post_id: 47,
      user_id: 5,
      category_id: 1,
      title: "Versatile",
      content: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      view_count: 140,
      creation_date: "2023-03-16",
      is_published: true
    },
    {
      post_id: 48,
      user_id: 5,
      category_id: 4,
      title: "De-engineered",
      content: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      view_count: 68,
      creation_date: "2022-11-06",
      is_published: true
    },
    {
      post_id: 49,
      user_id: 3,
      category_id: 4,
      title: "Multi-layered",
      content: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      view_count: 424,
      creation_date: "2023-03-30",
      is_published: true
    },
    {
      post_id: 50,
      user_id: 4,
      category_id: 4,
      title: "task-force",
      content: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      view_count: 298,
      creation_date: "2022-10-26",
      is_published: true
    },
    {
      post_id: 51,
      user_id: 3,
      category_id: 5,
      title: "strategy",
      content: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      view_count: 19,
      creation_date: "2023-01-03",
      is_published: false
    },
    {
      post_id: 52,
      user_id: 5,
      category_id: 3,
      title: "Intuitive",
      content: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      view_count: 343,
      creation_date: "2023-03-25",
      is_published: false
    },
    {
      post_id: 53,
      user_id: 3,
      category_id: 2,
      title: "Open-source",
      content: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      view_count: 273,
      creation_date: "2023-01-18",
      is_published: true
    },
    {
      post_id: 54,
      user_id: 3,
      category_id: 5,
      title: "Inverse",
      content: "Fusce consequat. Nulla nisl. Nunc nisl.",
      view_count: 52,
      creation_date: "2023-06-03",
      is_published: false
    },
    {
      post_id: 55,
      user_id: 5,
      category_id: 3,
      title: "Multi-channelled",
      content: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      view_count: 128,
      creation_date: "2023-06-04",
      is_published: false
    },
    {
      post_id: 56,
      user_id: 4,
      category_id: 4,
      title: "Automated",
      content: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      view_count: 28,
      creation_date: "2023-01-10",
      is_published: true
    },
    {
      post_id: 57,
      user_id: 1,
      category_id: 5,
      title: "optimal",
      content: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      view_count: 18,
      creation_date: "2022-11-28",
      is_published: false
    },
    {
      post_id: 58,
      user_id: 1,
      category_id: 5,
      title: "support",
      content: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      view_count: 286,
      creation_date: "2023-01-15",
      is_published: false
    },
    {
      post_id: 59,
      user_id: 1,
      category_id: 2,
      title: "Total",
      content: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      view_count: 459,
      creation_date: "2023-02-20",
      is_published: false
    },
    {
      post_id: 60,
      user_id: 2,
      category_id: 2,
      title: "Open-architected",
      content: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      view_count: 402,
      creation_date: "2023-05-15",
      is_published: true
    },
    {
      post_id: 61,
      user_id: 1,
      category_id: 2,
      title: "user-facing",
      content: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      view_count: 150,
      creation_date: "2022-10-09",
      is_published: true
    },
    {
      post_id: 62,
      user_id: 4,
      category_id: 1,
      title: "zero administration",
      content: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      view_count: 299,
      creation_date: "2023-01-28",
      is_published: false
    },
    {
      post_id: 63,
      user_id: 5,
      category_id: 2,
      title: "adapter",
      content: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      view_count: 480,
      creation_date: "2022-11-24",
      is_published: true
    },
    {
      post_id: 64,
      user_id: 5,
      category_id: 5,
      title: "Versatile",
      content: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      view_count: 316,
      creation_date: "2022-10-29",
      is_published: false
    },
    {
      post_id: 65,
      user_id: 2,
      category_id: 3,
      title: "analyzing",
      content: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      view_count: 41,
      creation_date: "2022-12-04",
      is_published: true
    },
    {
      post_id: 66,
      user_id: 1,
      category_id: 3,
      title: "approach",
      content: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      view_count: 138,
      creation_date: "2023-03-21",
      is_published: true
    },
    {
      post_id: 67,
      user_id: 5,
      category_id: 3,
      title: "contingency",
      content: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      view_count: 441,
      creation_date: "2023-06-11",
      is_published: true
    },
    {
      post_id: 68,
      user_id: 1,
      category_id: 5,
      title: "Phased",
      content: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      view_count: 311,
      creation_date: "2023-03-12",
      is_published: false
    },
    {
      post_id: 69,
      user_id: 1,
      category_id: 2,
      title: "Integrated",
      content: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      view_count: 16,
      creation_date: "2022-11-29",
      is_published: true
    },
    {
      post_id: 70,
      user_id: 4,
      category_id: 1,
      title: "synergy",
      content: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      view_count: 106,
      creation_date: "2023-01-12",
      is_published: true
    },
    {
      post_id: 71,
      user_id: 2,
      category_id: 5,
      title: "Digitized",
      content: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      view_count: 143,
      creation_date: "2023-01-02",
      is_published: true
    },
    {
      post_id: 72,
      user_id: 1,
      category_id: 5,
      title: "database",
      content: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      view_count: 392,
      creation_date: "2023-03-04",
      is_published: false
    },
    {
      post_id: 73,
      user_id: 5,
      category_id: 4,
      title: "moderator",
      content: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      view_count: 255,
      creation_date: "2022-12-26",
      is_published: true
    },
    {
      post_id: 74,
      user_id: 2,
      category_id: 2,
      title: "paradigm",
      content: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      view_count: 97,
      creation_date: "2023-02-01",
      is_published: false
    },
    {
      post_id: 75,
      user_id: 2,
      category_id: 3,
      title: "core",
      content: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      view_count: 209,
      creation_date: "2022-09-30",
      is_published: false
    },
    {
      post_id: 76,
      user_id: 1,
      category_id: 4,
      title: "Reactive",
      content: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      view_count: 42,
      creation_date: "2022-11-15",
      is_published: true
    },
    {
      post_id: 77,
      user_id: 2,
      category_id: 4,
      title: "reciprocal",
      content: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      view_count: 471,
      creation_date: "2023-01-28",
      is_published: true
    },
    {
      post_id: 78,
      user_id: 1,
      category_id: 5,
      title: "local",
      content: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      view_count: 487,
      creation_date: "2023-01-10",
      is_published: true
    },
    {
      post_id: 79,
      user_id: 4,
      category_id: 2,
      title: "analyzer",
      content: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      view_count: 450,
      creation_date: "2023-05-22",
      is_published: false
    },
    {
      post_id: 80,
      user_id: 4,
      category_id: 5,
      title: "Re-engineered",
      content: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      view_count: 341,
      creation_date: "2023-01-04",
      is_published: false
    },
    {
      post_id: 81,
      user_id: 2,
      category_id: 4,
      title: "context-sensitive",
      content: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      view_count: 392,
      creation_date: "2022-09-27",
      is_published: false
    },
    {
      post_id: 82,
      user_id: 2,
      category_id: 2,
      title: "hybrid",
      content: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      view_count: 149,
      creation_date: "2023-03-05",
      is_published: false
    },
    {
      post_id: 83,
      user_id: 4,
      category_id: 1,
      title: "orchestration",
      content: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      view_count: 203,
      creation_date: "2023-05-06",
      is_published: false
    },
    {
      post_id: 84,
      user_id: 4,
      category_id: 3,
      title: "foreground",
      content: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      view_count: 448,
      creation_date: "2022-10-13",
      is_published: false
    },
    {
      post_id: 85,
      user_id: 1,
      category_id: 3,
      title: "alliance",
      content: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      view_count: 338,
      creation_date: "2022-12-24",
      is_published: false
    },
    {
      post_id: 86,
      user_id: 1,
      category_id: 1,
      title: "internet solution",
      content: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      view_count: 162,
      creation_date: "2023-03-24",
      is_published: true
    },
    {
      post_id: 87,
      user_id: 4,
      category_id: 2,
      title: "alliance",
      content: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      view_count: 235,
      creation_date: "2022-12-27",
      is_published: false
    },
    {
      post_id: 88,
      user_id: 4,
      category_id: 1,
      title: "neural-net",
      content: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      view_count: 143,
      creation_date: "2023-02-15",
      is_published: false
    },
    {
      post_id: 89,
      user_id: 3,
      category_id: 4,
      title: "transitional",
      content: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      view_count: 284,
      creation_date: "2022-10-23",
      is_published: true
    },
    {
      post_id: 90,
      user_id: 5,
      category_id: 3,
      title: "methodical",
      content: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      view_count: 372,
      creation_date: "2023-02-06",
      is_published: false
    },
    {
      post_id: 91,
      user_id: 2,
      category_id: 4,
      title: "Optional",
      content: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      view_count: 6,
      creation_date: "2023-05-17",
      is_published: true
    },
    {
      post_id: 92,
      user_id: 4,
      category_id: 3,
      title: "clear-thinking",
      content: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      view_count: 494,
      creation_date: "2023-03-03",
      is_published: false
    },
    {
      post_id: 93,
      user_id: 3,
      category_id: 5,
      title: "Enterprise-wide",
      content: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      view_count: 188,
      creation_date: "2023-01-12",
      is_published: false
    },
    {
      post_id: 94,
      user_id: 3,
      category_id: 3,
      title: "disintermediate",
      content: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      view_count: 352,
      creation_date: "2023-03-08",
      is_published: true
    },
    {
      post_id: 95,
      user_id: 4,
      category_id: 1,
      title: "Profit-focused",
      content: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      view_count: 493,
      creation_date: "2022-10-09",
      is_published: true
    },
    {
      post_id: 96,
      user_id: 2,
      category_id: 4,
      title: "Assimilated",
      content: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      view_count: 195,
      creation_date: "2022-11-20",
      is_published: false
    },
    {
      post_id: 97,
      user_id: 4,
      category_id: 4,
      title: "uniform",
      content: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      view_count: 27,
      creation_date: "2022-12-07",
      is_published: false
    },
    {
      post_id: 98,
      user_id: 3,
      category_id: 5,
      title: "middleware",
      content: "Fusce consequat. Nulla nisl. Nunc nisl.",
      view_count: 48,
      creation_date: "2023-02-07",
      is_published: true
    },
    {
      post_id: 99,
      user_id: 4,
      category_id: 4,
      title: "Quality-focused",
      content: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      view_count: 279,
      creation_date: "2023-03-02",
      is_published: true
    },
    {
      post_id: 100,
      user_id: 3,
      category_id: 3,
      title: "Expanded",
      content: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      view_count: 251,
      creation_date: "2023-02-24",
      is_published: false
    }
  ]
  isPostHasComments : boolean = false;
  comments : Comments[] = this.commentsService.getCommentsList();

  constructor(
    private commentsService : CommentsService
  ) { }

  getPostList(){
    return this.posts
  }

  getPost(index: number): Posts | undefined {
    return this.posts.find((post: Posts) => post.post_id === index);
  }

  addNewItemDetails(userIdNew : number, categoryIdNew : number, titleNew : string, contentNew : string , viewCountNew : number, creationDateNew : string, isPublishedNew : boolean ){
    let minAvailablePostId = 1;
    const usedPostIds = this.posts.map((post) => post.post_id);
    while (usedPostIds.includes(minAvailablePostId)) {
      minAvailablePostId++;
    }

    this.posts.push({
      post_id: minAvailablePostId,
      user_id: userIdNew,
      category_id: categoryIdNew,
      title: titleNew,
      content : contentNew,
      view_count : viewCountNew,
      creation_date: creationDateNew,
      is_published: isPublishedNew,
    })
  }

  removeItem(item : Posts) {
    let postId = item.post_id
    const index = this.posts.findIndex(item => item.post_id === postId);
    this.findPostComments(item)
    if(this.isPostHasComments){
      alert("You cannot delete a post that has comments.");
    } else {
      this.posts.splice(index, 1);
    }
  }

  editItem(item : Posts, userIdIn : number, categoryIdIn : number, titleIn : string, contentIn : string , viewCountIn : number, creationDateIn : string, isPublishedIn : boolean ){
    const i = item.post_id -1;
    this.posts[i] = {
      post_id: i + 1,
      user_id: userIdIn,
      category_id: categoryIdIn,
      title: titleIn,
      content : contentIn,
      view_count : viewCountIn,
      creation_date: creationDateIn,
      is_published: isPublishedIn,
    }
  }
  findPostComments(post: Posts) {
    const postComments = this.comments.filter((comment: Comments) => comment.post_id === post.post_id);
    if (postComments.length > 0) {
      this.isPostHasComments = true;
    } else {
      this.isPostHasComments = false;
    }
  }

}
