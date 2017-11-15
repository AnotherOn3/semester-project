using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Another_one_backend.Models;

namespace Another_one_backend.Controllers
{
    public class StoresController : ApiController
    {
        private AnotherOneMobileAppEntities db = new AnotherOneMobileAppEntities();

        // GET: api/Stores
        public IQueryable<Store> GetStore()
        {
            return db.Store;
        }

        // GET: api/Stores/5
        [ResponseType(typeof(Store))]
        public IHttpActionResult GetStore(int id)
        {
            Store store = db.Store.Find(id);
            if (store == null)
            {
                return NotFound();
            }

            return Ok(store);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StoreExists(int id)
        {
            return db.Store.Count(e => e.Id == id) > 0;
        }
    }
}