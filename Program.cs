var builder = WebApplication.CreateBuilder(args);
//build -> injection thư viện
builder.Services.AddRazorPages();   //DI thư viện razor web
builder.Services.AddServerSideBlazor(); //DI thư viện server side

//client side -> thực hiện ở máy người dùng, server -> gửi về sererver xử lý xong gửi lại client (do đó clinet k biết)


var app = builder.Build();
//use: sử dụng thư viện
app.UseHttpsRedirection();      //https
app.UseStaticFiles();

app.MapBlazorHub();     //middleware của blazor để làm file chạy đầu tiên
app.MapFallbackToPage("/_Host");    //file chọn chạy đầu tiên



app.Run();  //web được start khi dotnet run
