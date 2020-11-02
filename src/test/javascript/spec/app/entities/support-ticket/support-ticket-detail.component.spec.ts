import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { HomeBuildingVersion1TestModule } from '../../../test.module';
import { SupportTicketDetailComponent } from 'app/entities/support-ticket/support-ticket-detail.component';
import { SupportTicket } from 'app/shared/model/support-ticket.model';

describe('Component Tests', () => {
  describe('SupportTicket Management Detail Component', () => {
    let comp: SupportTicketDetailComponent;
    let fixture: ComponentFixture<SupportTicketDetailComponent>;
    const route = ({ data: of({ supportTicket: new SupportTicket(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HomeBuildingVersion1TestModule],
        declarations: [SupportTicketDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SupportTicketDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SupportTicketDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load supportTicket on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.supportTicket).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
